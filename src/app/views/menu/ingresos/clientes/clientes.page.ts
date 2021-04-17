import { Component, OnInit } from '@angular/core';
import {_clientes} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';
import {AlertController, ModalController} from '@ionic/angular';
import {FormClientesPage} from './form-clientes/form-clientes.page';
import {DialogService} from '../../../../services/dialog.service';
import {error} from '@angular/compiler/src/util';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  public domain = 'Clientes';
  public listado: _clientes[];
  public listadoDeBusqueda: _clientes[];
  public getRowsSub: Subscription;
  public title = 'Clientes';
  public subtitle = 'Cliente';
  constructor(private restService: RestService,
              private modalCtrl: ModalController, public alertController: AlertController, private dialogService: DialogService,
              private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }
  async add() {
    this.restService.create<_clientes>().subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormClientesPage,
        cssClass: 'modal-wrapper',
        componentProps: {
          data: {title: 'Agregar ' + this.title, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      // tslint:disable-next-line:triple-equals
      if ({data}.data != undefined) {
        this.restService.save<_clientes>({data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Creado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
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
      if (currentFood && searchTerm) {
        return(currentFood.rfc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
  async delete(item: _clientes) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'FinanzasIQ',
      subHeader: 'Advertencia',
      message: 'Estas seguro de eliminar el Folio ' + item.id,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.dialogService.presentToast( 'Operacion cancelada', 3, false)
        }, {
          text: 'Confirmar',
          handler: () => {
            // @ts-ignore
            this.restService.delete<_clientes>(item.id).subscribe(() => {
              this.dialogService.presentToast(this.subtitle + 'con Folio' + item.id + ' Eliminado', 3, false).then(() => this.index());
          }, () => this.dialogService.presentToast('Error al eliminar, el registro se encuenta en uso', 3, false));
          }
        }
      ]
    });
    await alert.present();
  }

  edit(item: _clientes) {
    this.restService.edit<_clientes>(item.id).subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormClientesPage,
        cssClass: 'modal-wrapper',
        componentProps: {
          data: {title: this.title + ' Folio: ' + item.id, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      // tslint:disable-next-line:triple-equals
      if ({data}.data != undefined) {
        this.restService.update<_clientes>(item.id, {data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Actualizado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.index();
      event.target.complete();
    }, 500);
  }
}
