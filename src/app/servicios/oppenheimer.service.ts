import { Injectable } from '@angular/core';
import { ResultadoWSugerencias } from '../data/clases';
import { ResultadoWSDetalle } from '../data/clases';

@Injectable({
  providedIn: 'root'
})
export class OppenheimerService {
  

  apikey = "5ae2e3f221c38a28845f05b6450755e463371f9354ade1c41fae994d"
  baseUrl = "https://api.opentripmap.com/0.1/en/"

  constructor() { }

  async buscarLugar(termino:string): Promise<ResultadoWSugerencias>{
    const url = `${this.baseUrl}places/autosuggest?name=${termino}&radius=12742000&lon=-73.0336522&lat=-36.9248235&rate=3&limit=5&apikey=${this.apikey}`;
    const result = await fetch(url)
    const data = await result.json()
    return data
  }
  async Detalles(Det:string): Promise<ResultadoWSDetalle>{
    const url = `${this.baseUrl}places/xid/${Det}?&apikey=${this.apikey}`;
    const result = await fetch(url)
    const data = await result.json()
    return data
  }
}