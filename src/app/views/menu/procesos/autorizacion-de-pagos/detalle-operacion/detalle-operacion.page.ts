import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {_operacion} from '../../../../../interfaces/data.interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RestService} from '../../../../../services/rest.service';


@Component({
  selector: 'app-detalle-operacion',
  templateUrl: './detalle-operacion.page.html',
  styleUrls: ['./detalle-operacion.page.scss'],
})
export class DetalleOperacionPage implements OnInit {

  @Input() public data: _operacion;
  constructor(private restService: RestService,
              public modalController: ModalController) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  exit() {
    this.modalController.dismiss();
  }
}
