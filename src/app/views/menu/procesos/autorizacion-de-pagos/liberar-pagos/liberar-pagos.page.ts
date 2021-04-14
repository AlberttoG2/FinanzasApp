import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {_autorizacionDePagos, _operacion} from '../../../../../interfaces/data.interface';
import {RestService} from '../../../../../services/rest.service';
import {DetalleOperacionPage} from '../detalle-operacion/detalle-operacion.page';
import {GlobalService} from '../../../../../services/global.service';
import {AlertController, ModalController} from '@ionic/angular';
import {DialogService} from '../../../../../services/dialog.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-liberar-pagos',
  templateUrl: './liberar-pagos.page.html',
  styleUrls: ['./liberar-pagos.page.scss'],
})
export class LiberarPagosPage implements OnInit {
  public listado: _autorizacionDePagos[];
  public listadoDeBusqueda: _autorizacionDePagos[];
  tipoOperacion;
  busqueda: FormGroup;
  public fecha: Date = new Date();
  public cards: _autorizacionDePagos[];

  constructor(private restService: RestService, private globalService: GlobalService, public modalController: ModalController,
              public alertController: AlertController, private dialogService: DialogService, private http: HttpClient) {
  }

  ngOnInit() {
    this.restService.initService('AutorizacionDePagos');
    this.busqueda = this.restService.buildForm({ fecha: ['', Validators.required], tipo: ['', Validators.required] });
  }

  cargarOperaciones() {
    this.restService.index<_autorizacionDePagos[]>({operacion: this.busqueda.get('tipo').value,
      estado: 'Revisado', fecha: new Date(this.busqueda.get('fecha').value)}, 'cargarPagos').subscribe(respuesta => {
      this.cards = respuesta;
      this.listado = respuesta;
      this.tipoOperacion = this.busqueda.get('tipo').value;
    });
  }

  async filterList(evt) {
    this.cards = this.listado;
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.cards = this.cards.filter(currentFood => {
      if (currentFood.folio && searchTerm) { return(currentFood.folio.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1); }
    });
  }

  detalles(row) {
    const opts = this.globalService.getHttpOptions();
    opts['params'] = {operacion: row.operacion, folio: row.folio};
    this.http.get<_operacion>(this.globalService.Url + 'AutorizacionDePagos/' + 'cargarOperacion', opts).subscribe(async result => {
      // const dialogRef = this.dialog.open(OperacionesComponent, { data: result[0] });
      // dialogRef.afterClosed().subscribe();
      const modal = await this.modalController.create({
        component: DetalleOperacionPage, componentProps: { data:  result[0] }
      });
      await modal.present();
    });
  }

  async aceptar(c: _autorizacionDePagos) {
    const alert = await this.alertController.create({
      mode: 'ios', header: 'FinanzasIQ', subHeader: 'Autorizacion de Pagos',
      message: 'Desea marcar como Liberada la operacion con folio: ' + c.folio, buttons: [{
        text: 'Cancelar', role: 'cancel',
        handler: () => this.dialogService.presentToast('Operacion Abortada', 3, false) }, {
        text: 'Confirmar',
        handler: () => {
          const opts = this.globalService.getHttpOptions();
          opts['params'] = {operacion: this.tipoOperacion, folio: c.folio, estatus: 'Liberado', operaciones: 'Revisado',
            formaLiquidacion: 1, cuentaOrdenante: 1, fecha: this.fecha};
          // tslint:disable-next-line:max-line-length
          this.http.get<any>(this.globalService.Url + 'AutorizacionDePagos/cambiarEstado', opts).subscribe(
            () => this.cargarOperaciones()
          );
        }}]
    });
    await alert.present();
  }

  async cancelar(c: _autorizacionDePagos) {
    const alert = await this.alertController.create({
      mode: 'ios', header: 'FinanzasIQ', subHeader: 'Autorizacion de Pagos',
      message: 'Desea marcar como Cancelada la operacion con folio: ' + c.folio,
      buttons: [{ text: 'Cancelar', role: 'cancel',
        handler: () => this.dialogService.presentToast('Operacion Abortada', 3, false) }, {
        text: 'Confirmar', handler: () => {
          const opts = this.globalService.getHttpOptions();
          opts['params'] = {operacion: this.tipoOperacion, folio: c.folio, estatus: 'Cancelada', operaciones: 'Revisado',
            formaLiquidacion: 1, cuentaOrdenante: 1, fecha: this.fecha};
          this.http.get<any>(this.globalService.Url + 'AutorizacionDePagos/cambiarEstado', opts).subscribe(() => this.cargarOperaciones());
        }}]
    });
    await alert.present();
  }

  regresar() {
    this.cards = null;
    this.listado = null;
    this.ngOnInit();
  }
}
