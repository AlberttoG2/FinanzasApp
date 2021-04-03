import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {FormProveedoresPage} from './form-proveedores/form-proveedores.page';
import {_clientes, _proveedores} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';
import {DialogService} from '../../../../services/dialog.service';
import {FormClientesPage} from '../../ingresos/clientes/form-clientes/form-clientes.page';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {
  public domain = 'Proveedores';
  public listado: _proveedores[];
  public listadoDeBusqueda: _proveedores[];
  public busqueda: _proveedores[];
  public getRowsSub: Subscription;
  public title = 'Proveedores';
  public subtitle = 'Proveedor';

  constructor(private restService: RestService,
              private modalCtrl: ModalController,
              public alertController: AlertController,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }

  async add() {
    this.restService.create<_proveedores>().subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormProveedoresPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: 'Agregar ' + this.title, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      // tslint:disable-next-line:triple-equals
      if ({data}.data != undefined) {
        this.restService.save<_proveedores>({data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Creado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }
  index(){
    this.getRowsSub = this.restService.index<_proveedores[]>().subscribe(respuesta => {
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
        return(currentFood.rfc.toLocaleLowerCase().indexOf(searchTerm.toLocaleString()) > -1);
      }
    });
  }
  async delete(item: _proveedores) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'FinanzasIQ',
      subHeader: 'Advertencia',
      message: 'Estas seguro de eliminar el folio ' + item.id,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.dialogService.presentToast('Operacion cancelada', 3, false)
        }, {
          text: 'Confirmar',
          handler: () => {
            this.restService.delete<_proveedores>(item.id).subscribe(() =>
              this.dialogService.presentToast(this.subtitle + 'con Folio' + item.id + 'Eliminado', 3, false).then(() => this.index()));
          }
        }
      ]
    });
    await alert.present();
  }
  edit(item: _proveedores) {
    this.restService.edit<_proveedores>(item.id).subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormProveedoresPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: this.title + ' Folio: ' + item.id, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if ({data}.data !== undefined) {
        this.restService.update<_proveedores>(item.id, {data}.data).subscribe(() =>
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
