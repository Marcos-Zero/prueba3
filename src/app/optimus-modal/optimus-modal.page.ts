import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular/common';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-optimus-modal',
  templateUrl: './optimus-modal.page.html',
  styleUrls: ['./optimus-modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OptimusModalPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;
  @Input() LugarAEliminar: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  confirmar() {
    
    this.modalCtrl.dismiss({ confirmado: true, valor: this.LugarAEliminar });
  }

  cerrar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
