import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, SearchbarChangeEventDetail } from '@ionic/angular';
import { IonModal,IonInput, IonSearchbar, IonThumbnail, IonContent,IonLabel,IonItem, IonList, IonButton, IonToolbar, IonHeader, IonTitle, IonIcon, NavParams} from '@ionic/angular/standalone';
import { OppenheimerService } from 'src/app/servicios/oppenheimer.service';
import { FukushimaService } from 'src/app/servicios/fukushima.service';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, cameraOutline, airplaneOutline} from 'ionicons/icons';
import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/home/home.page';
import { RouterLink } from '@angular/router';
import { Camera, Photo, CameraResultType } from '@capacitor/camera';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-Viaje',
  templateUrl: './Viaje.page.html',
  styleUrls: ['./Viaje.page.scss'],
  standalone: true,
  imports: [IonModal,RouterLink,HomePage,IonicModule, CommonModule, FormsModule, IonInput, IonSearchbar, IonThumbnail, IonContent,IonLabel, IonItem, IonList, IonButton, IonToolbar,IonHeader, IonTitle]
})


export class ViajePage implements OnInit {
  
  valor: number[] = [];
  nuevoValor: number | undefined;
  foto: Photo | null = null;
  addedPlaces: any[] = [];
  showAddedPlaces = false; 
  
  constructor(
    private servicio: FukushimaService,
    private servicio2: OppenheimerService,
  )
  {
    addIcons({airplaneOutline,
             cameraOutline,
             trashOutline,
             addCircleOutline})
  }

  AgregarLugar(lugar: any) {
    this.servicio.agregarlhome(lugar);
    this.addedPlaces.push(lugar);
    this.showAddedPlaces = true;
    
  }

  agregarValor(): void {
    if (!isNaN(parseFloat(this.nuevoValor as any)) && isFinite(this.nuevoValor as any)) {
      this.valor.push(parseFloat(this.nuevoValor as any));
      this.nuevoValor = undefined;
    } else {
      alert('Ingresa un valor numérico válido.');
    }
}
async handleInput(event: any) {
  await this.servicio.handleInput(event);
}
get places() {
  return this.servicio.Lugares;
}
async TomarFoto(){
  this.foto =await Camera.getPhoto({
    quality: 90,
    resultType: CameraResultType.Uri,
    saveToGallery:true,
    correctOrientation: true
  })
}
async eliminarDireccion() {
  for (const lugar of this.addedPlaces) {
    await this.servicio.EliminarLugarHome(lugar);
  }
  this.addedPlaces = [];
  this.showAddedPlaces = false;
 
}
  ngOnInit() {}

}