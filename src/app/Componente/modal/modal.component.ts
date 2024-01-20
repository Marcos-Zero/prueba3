import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ModalComponent  implements OnInit {
  
  @Input() lugar: any;

  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
    
  }

  closeModal() {
    this.modalController.dismiss();
  }

  confirmDelete() {
    this.modalController.dismiss({ confirmed: true });
  }
}