import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormProveedoresPage} from './form-proveedores/form-proveedores.page';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: FormProveedoresPage,
      componentProps: {
        nombre: 'Alberto',
        pais: 'Suecia'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('Retorno', data);

  }

}
