import { Component, OnInit } from '@angular/core';
import {_clientes} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';
import {ModalController} from '@ionic/angular';
import {FormClientesPage} from './form-clientes/form-clientes.page';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  public domain = 'Clientes';
  public listado: _clientes[];
  public listadoDeBusqueda: _clientes[];
  public busqueda: _clientes;
  public getRowsSub: Subscription;
  constructor(private restService: RestService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }
  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: FormClientesPage,
      componentProps: {
        nombre: 'Alberto',
        pais: 'Suecia'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('Retorno', data);
  }
  index(){
    this.getRowsSub = this.restService.index<_clientes[]>().subscribe(respuesta => {
      this.listado = respuesta;
      this.listadoDeBusqueda = respuesta;
    });
  }
  async filterList(evt) {
    this.listadoDeBusqueda = this.listado;
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.listadoDeBusqueda = this.listadoDeBusqueda.filter(currentFood => {
      if (currentFood.rfc && searchTerm) {
        return(currentFood.rfc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
