import { Component } from '@angular/core';
import { IonInput,IonThumbnail,IonImg, IonButtons,IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, SearchbarInputEventDetail, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, cameraOutline, airplaneOutline } from 'ionicons/icons';
import { ListaPage } from '../pagina/lista/lista.page';
import { OptimusModalPage } from '../optimus-modal/optimus-modal.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FukushimaService } from '../servicios/fukushima.service';
import { ModalController } from '@ionic/angular/standalone';
import { ViajePage } from '../pagina/Destinos/Viaje.page';
import { IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonModal,IonicModule,ViajePage,ListaPage,FormsModule,IonInput,IonThumbnail,RouterModule,IonImg, IonButtons,IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, CommonModule, IonList, IonItem, IonLabel, IonButton, IonIcon],
})
export class HomePage {
  Lugares: any[] = [];
  valor: number[] = [];
  nuevoValor: number | undefined;

  constructor(
    
    private servicio2: FukushimaService,
    private modalCtrl:ModalController
)
{
    addIcons({airplaneOutline,
             cameraOutline,
             trashOutline,
             addCircleOutline})
  }
  async DeleteLugar(Lugares: any) {
    console.log("DeleteLugar function called");
    const modal = await this.modalCtrl.create({
      component: OptimusModalPage,
      componentProps: { EliminarLugarHome: Lugares }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data && data.confirmado) {
      const index = this.Lugares.indexOf(data.Lugares);
      if (index > -1) {
        this.Lugares.splice(index, 1);
      }
    }
  }
  ngOnInit() {
    this.Lugares = this.servicio2.gettodosloslugares();
    this.Lugares = this.servicio2.LugaresPre; 
  }
}