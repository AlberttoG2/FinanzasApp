import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';
import {FormTerminosDeCobroPage} from './form-terminos-de-cobro/form-terminos-de-cobro.page';
import {AlertController, ModalController} from '@ionic/angular';
import {_terminosDeCobro} from '../../../../interfaces/data.interface';
import {DialogService} from '../../../../services/dialog.service';

@Component({
  selector: 'app-terminos-de-cobro',
  templateUrl: './terminos-de-cobro.page.html',
  styleUrls: ['./terminos-de-cobro.page.scss'],
})
export class TerminosDeCobroPage implements OnInit {
  public domain = 'TerminosDeCobro';
  public listado: _terminosDeCobro[];
  public listadoDeBusqueda: _terminosDeCobro[];
  public getRowsSub: Subscription;
  public title = 'Terminos de Cobro';
  public subtitle = 'Termino de Cobro';

  constructor(private restService: RestService, private modalCtrl: ModalController, private alertCtrl: AlertController,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }

  index() {
    this.getRowsSub = this.restService.index<_terminosDeCobro[]>().subscribe(respuesta => {
      this.listado = respuesta;
      this.listadoDeBusqueda = respuesta;
    });
  }

  async filtroTerminosDeCobro(evt) {
    this.listadoDeBusqueda = this.listado;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listadoDeBusqueda = this.listadoDeBusqueda.filter(currentFood => {
      if (currentFood.cliente && searchTerm) {
        return (currentFood.cliente.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  add() {
    this.restService.create<_terminosDeCobro>().subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormTerminosDeCobroPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: 'Agregar ' + this.title, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if ({data}) {
        this.restService.save<_terminosDeCobro>({data}.data).subscribe(() =>
        this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Creado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }

  edit(item: _terminosDeCobro) {
    this.restService.edit<_terminosDeCobro>(item.id).subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormTerminosDeCobroPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: this.title + ' Folio: ' + item.id, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      console.log('Retorno', data);
    });
  }

  async delete(item: _terminosDeCobro) {
    const alert = await this.alertCtrl.create({
      mode: 'ios', header: 'FinanzasIQ', subHeader: 'Adventencia',
      message: '¿Esta seguro de eliminar el folio: <strong>' + item.id + '</strong>?',
      buttons: [
        {text: 'Cancelar', role: 'cancel', handler: () => this.dialogService.presentToast('Operacion cancelada', 3, false)},
        {
          text: 'Confirmar', handler: () => this.restService.delete<_terminosDeCobro>(item.id).subscribe(() =>
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
