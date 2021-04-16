import { Component, OnInit } from '@angular/core';
import {_combo, _importaciones, _terminosDeCobro} from '../../../../interfaces/data.interface';
import {RestService} from '../../../../services/rest.service';
import {AlertController, ModalController} from '@ionic/angular';
import {DialogService} from '../../../../services/dialog.service';
import {Subscription} from 'rxjs';
import {FormImportacionesPage} from './form-importaciones/form-importaciones.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-importaciones',
  templateUrl: './importaciones.page.html',
  styleUrls: ['./importaciones.page.scss'],
})
export class ImportacionesPage implements OnInit {
  public domain = 'CargaExtractosFisica';
  public listado: _importaciones[];
  public listadoDeBusqueda: _importaciones[];
  public title = 'Importaciones';
  public subtitle = 'Importacion';
  public getRowsSub: Subscription;
  public busqueda: FormGroup;
  public razonSocialCombo: _combo[];
  public cuentaCombo: _combo[];
  cards: _importaciones[];

  constructor(private restService: RestService, private modalCtrl: ModalController, private alertCtrl: AlertController,
              private dialogService: DialogService, private screenOrientation: ScreenOrientation) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.combo<_combo[]>({id: 'RazonSocial'}, 'comboController').subscribe(result =>
      this.razonSocialCombo = result);
    this.formulario();
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    // this.index();
  }
  formulario() {
    this.busqueda = new FormGroup({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      razonSocial: new FormControl(''),
      alias: new FormControl(''),
      archivo: new FormControl('')
    });
  }
  cargarCuentas(value: any) {
    console.log(value);
    this.restService.combo<_combo[]>({id: value, banco: 0}, 'comboCuenta').subscribe(result =>
      this.cuentaCombo = result);
  }
  index() {
    this.getRowsSub = this.restService.index<_importaciones[]>({
      fechaInicio: this.busqueda.get('fechaInicio').value,
      fechaFin: this.busqueda.get('fechaFin').value,
      razonSocial: this.busqueda.get('razonSocial').value,
      alias: this.busqueda.get('alias').value,
      archivo: this.busqueda.get('archivo').value
    }, 'consultaExtractos').subscribe(respuesta => {
      this.listado = respuesta;
      this.cards = respuesta;
    });
  }

  async filtroImportaciones(evt) {
    this.listadoDeBusqueda = this.listado;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listadoDeBusqueda = this.listadoDeBusqueda.filter(currentFood => {
      if (currentFood.cuenta && searchTerm) {
        return (currentFood.cuenta.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  add(){
    this.restService.create<_importaciones>().subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormImportacionesPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: 'Agregar ' + this.title, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      // tslint:disable-next-line:triple-equals
      if ({data}.data != undefined) {
        this.restService.save<_importaciones>({data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Creado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }

  edit(item: _importaciones) {
    this.restService.edit<_importaciones>(item.id).subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormImportacionesPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: this.title + ' Folio: ' + item.id, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      // tslint:disable-next-line:triple-equals
      if ({data}.data != undefined) {
        this.restService.update<_importaciones>(item.id, {data}.data).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Actualizado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }

  async delete(item: _importaciones) {
    const alert = await this.alertCtrl.create({
      mode: 'ios', header: 'FinanzasIQ', subHeader: 'Adventencia',
      message: '¿Esta seguro de eliminar el folio: <strong>' + item.id + '</strong>?',
      buttons: [
        {text: 'Cancelar', role: 'cancel', handler: () => this.dialogService.presentToast('Operacion cancelada', 3, false)},
        {
          text: 'Confirmar', handler: () => this.restService.delete<_importaciones>(item.id).subscribe(() =>
            this.dialogService.presentToast(this.subtitle + ' con folio: ' + item.id + ' Eliminado', 3.5, false).then(() => this.index()))
        }]
    });
    await alert.present();
  }

  reset(){
    this.cards = null;
    this.ngOnInit();
  }
}
