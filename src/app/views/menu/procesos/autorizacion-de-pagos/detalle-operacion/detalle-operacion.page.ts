import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-detalle-operacion',
  templateUrl: './detalle-operacion.page.html',
  styleUrls: ['./detalle-operacion.page.scss'],
})
export class DetalleOperacionPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  exit() {
    this.modalController.dismiss();
  }
}
