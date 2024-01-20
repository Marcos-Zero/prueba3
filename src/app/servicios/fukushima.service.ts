import { Injectable } from '@angular/core';
import { OppenheimerService } from './oppenheimer.service';

@Injectable({
  providedIn: 'root'
})
export class FukushimaService {

  Lugares: any[] = [];
  LugaresPre: any[] = [];
  private BusquedaLugar: any[] = [];
  
  constructor(
    private servicio: OppenheimerService
  ) { }

  agregarlhome(lugar: any) {
    console.log("Añadiendo lugar:", lugar);
    this.LugaresPre.push(lugar);
  }
  EliminarLugarHome(lugar: any) {
    const index = this.LugaresPre.indexOf(lugar);
    if (index > -1) {
      this.LugaresPre.splice(index, 1);
  }}
  gettodosloslugares() {
      return [...this.LugaresPre, ...this.BusquedaLugar];
  }
  agregarbusqueda(lugar: any) {
      this.BusquedaLugar.push(lugar);
  }
  BusquedadeLugar() {
    return this.BusquedaLugar;
  }
  getLugarPre() {
    return this.LugaresPre;
  }
  async handleInput($event: any) {
    const termino = $event.detail.value;
    const searchResults = await this.servicio.buscarLugar(termino);
    this.BusquedaLugar = [];
    this.Lugares = [];
      for (const Det of searchResults.features) {
    const placeDetails = await this.servicio.Detalles(Det.properties.xid);
    this.Lugares.push({
        name: Det.properties.name,
        image: placeDetails.preview?.source
      });
    }
  }
}