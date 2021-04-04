import { Component, OnInit } from '@angular/core';
import {_terminosDeCobro, _terminosDePago} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';
import {AlertController, ModalController} from '@ionic/angular';
import {DialogService} from '../../../../services/dialog.service';
import {FormTerminosDePagoPage} from './form-terminos-de-pago/form-terminos-de-pago.page';

@Component({
  selector: 'app-terminos-de-pago',
  templateUrl: './terminos-de-pago.page.html',
  styleUrls: ['./terminos-de-pago.page.scss'],
})
export class TerminosDePagoPage implements OnInit {
  public domain = 'TerminosDePago';
  public listado: _terminosDePago[];
  public listadoDeBusqueda: _terminosDePago[];
  public getRowsSub: Subscription;
  public title = 'Terminos de Pago';
  public subtitle = 'Terminos de Pago';

  constructor(private restService: RestService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }

  index() {
    this.getRowsSub = this.restService.index<_terminosDePago[]>().subscribe(respuesta => {
      this.listado = respuesta;
      this.listadoDeBusqueda = respuesta;
    });
  }

  async filtroTerminosDePago(evt) {
    this.listadoDeBusqueda = this.listado;
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.listadoDeBusqueda = this.listadoDeBusqueda.filter(currentFood => {
     if (currentFood.proveedor && searchTerm) {
       return (currentFood.proveedor.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
     }
    });
  }
  add() {
    this.restService.create<_terminosDePago>().subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormTerminosDePagoPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: 'Agregar ' + this.title, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if ({data}.data !== undefined) {
        this.restService.save<_terminosDePago>({data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Creado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }
  edit(item: _terminosDePago) {
    this.restService.edit<_terminosDePago>(item.id).subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormTerminosDePagoPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: this.title + ' Folio: ' + item.id, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if ({data}.data !== undefined) {
        this.restService.update<_terminosDePago>(item.id, {data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Actualizado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }
  async delete(item: _terminosDePago) {
    const alert = await this.alertCtrl.create({
      mode: 'ios', header: 'FinanzasIQ', subHeader: 'Adventencia',
      message: '¿Esta seguro de eliminar el folio: <strong>' + item.id + '</strong>?',
      buttons: [
        {text: 'Cancelar', role: 'cancel', handler: () => this.dialogService.presentToast('Operacion cancelada', 3, false)},
        {
          text: 'Confirmar', handler: () => this.restService.delete<_terminosDePago>(item.id).subscribe(() =>
            this.dialogService.presentToast(this.subtitle + ' con folio: ' + item.id + ' Eliminado', 3.5, false).then(() => this.index()))
        }]
    });
    await alert.present();
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.index();
      event.target.complete();
    }, 500);
  }
}
