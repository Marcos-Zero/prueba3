import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,ModalController } from '@ionic/angular';
import { OppenheimerService } from 'src/app/servicios/oppenheimer.service';
import { HomePage } from 'src/app/home/home.page';
import { RouterModule } from '@angular/router';
import { IonModal } from '@ionic/angular/common';
import { ViewChild, } from '@angular/core';
import { NavParams } from '@ionic/angular/common';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
selector: 'app-lista',
  templateUrl: './lista.page.html',
 styleUrls: ['./lista.page.scss'],
  standalone: true,
  imports: [RouterModule, HomePage, IonicModule, CommonModule, FormsModule]
})
export class ListaPage implements OnInit {
 
  constructor( ) { }

    ngOnInit() {
   
  }

  
}