import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {_autorizacionDePagos} from '../../../../../interfaces/data.interface';
import {RestService} from '../../../../../services/rest.service';
import {DetalleOperacionPage} from '../detalle-operacion/detalle-operacion.page';
import {GlobalService} from '../../../../../services/global.service';
import {AlertController, ModalController} from '@ionic/angular';
import {DialogService} from '../../../../../services/dialog.service';

@Component({
  selector: 'app-estatus-de-pagos',
  templateUrl: './estatus-de-pagos.page.html',
  styleUrls: ['./estatus-de-pagos.page.scss'],
})
export class EstatusDePagosPage implements OnInit {
  busqueda: FormGroup;
  public listado: _autorizacionDePagos[];
  public cards: _autorizacionDePagos[];
  constructor(private restService: RestService,
              private globalService: GlobalService,
              public modalController: ModalController,
              public alertController: AlertController,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.restService.initService('AutorizacionDePagos');
    this.busqueda = this.restService.buildForm({
      fecha: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  cargarOperaciones(){
    // const opts = this.globalService.getHttpOptions();
    // opts['params'] = {
    //   operacion: this.busqueda.get('tipo'),
    //   estado: '-',
    //   fecha: this.busqueda.get('fecha')
    // };
    // const dia = new Date(this.busqueda.get('fecha').value);
    // console.log(dia);
    this.restService.index<_autorizacionDePagos[]>({operacion: this.busqueda.get('tipo').value,
      estado: 'Revisado',
      fecha: new Date(this.busqueda.get('fecha').value)}, 'cargarPagos').subscribe(respuesta => {
      this.cards = respuesta;
      this.listado = respuesta;
    });
  }

  regresar() {
    this.cards = null;
    this.listado = null;
    this.ngOnInit();
  }

  async filterList(evt) {
    this.cards = this.listado;
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.cards = this.cards.filter(currentFood => {
      if (currentFood.folio && searchTerm) {
        return(currentFood.folio.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  async showInfo() {
    const modal = await this.modalController.create({
      component: DetalleOperacionPage
    });
    return await modal.present();
  }

  async aceptar() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'FinanzasIQ',
      subHeader: 'Advertencia',
      message: '¿Aceptar operacion?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => this.dialogService.presentToast('Operacion cancelada', 3, false)
      }, {
        text: 'Confirmar',
        handler: () => {
        }
      }
      ]
    });
    await alert.present();
  }

  async cancelar() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'FinanzasIQ',
      subHeader: 'Advertencia',
      message: '¿Cancelar operacion?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => this.dialogService.presentToast('Operacion cancelada', 3, false)
      }, {
        text: 'Confirmar',
        handler: () => {
        }
      }
      ]
    });
    await alert.present();
  }

}
