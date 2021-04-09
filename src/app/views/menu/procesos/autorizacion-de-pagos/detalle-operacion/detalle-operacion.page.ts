import {Component, inject, Inject, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {_operacion} from '../../../../../interfaces/data.interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-operacion',
  templateUrl: './detalle-operacion.page.html',
  styleUrls: ['./detalle-operacion.page.scss'],
})
export class DetalleOperacionPage implements OnInit {

  constructor(public modalController: ModalController,
              @inject(MAT_DIALOG_DATA) public data: _operacion) {
    console.log(data);
  }

  ngOnInit() {
  }

  exit() {
    this.modalController.dismiss();
  }
}
