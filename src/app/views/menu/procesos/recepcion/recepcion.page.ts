import {Component, OnInit} from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {RestService} from '../../../../services/rest.service';
import {_clientes, _propuestaPagos, _recepcionFacturas, _terminosDePago} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {AlertController, ModalController} from '@ionic/angular';
import {DialogService} from '../../../../services/dialog.service';
import {GlobalService} from '../../../../services/global.service';
import {HttpClient} from '@angular/common/http';
import {FormTerminosDePagoPage} from '../../egresos/terminos-de-pago/form-terminos-de-pago/form-terminos-de-pago.page';
import {FormRecepcionPage} from './form-recepcion/form-recepcion.page';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.page.html',
  styleUrls: ['./recepcion.page.scss'],
})
export class RecepcionPage implements OnInit {
  public domain = 'RecepcionFacturas';
  public listado: _recepcionFacturas[];
  public listadoDeBusqueda: _recepcionFacturas[];
  public getRowsSub: Subscription;
  public title = 'Clientes';
  public subtitle = 'Cliente';

  constructor(private screenOrientation: ScreenOrientation, private restService: RestService, private alertCtrl: AlertController,
              private dialogService: DialogService, private globalService: GlobalService, private http: HttpClient,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.initService(this.domain);
    this.index();
  }

  index() {
    this.getRowsSub = this.restService.index<_recepcionFacturas[]>().subscribe(respuesta => {
      this.listado = respuesta;
      this.listadoDeBusqueda = respuesta;
    });
  }

  async envio(f: _recepcionFacturas) {
    const alert = await this.alertCtrl.create({
      mode: 'ios', header: 'FinanzasIQ', subHeader: 'Confirmacion',
      message: '¿Esta seguro autorizar el envio del docimento con id: <strong>' + f.idDocumento + '</strong>?',
      buttons: [
        {text: 'Cancelar', role: 'cancel', handler: () => this.dialogService.presentToast('Operacion abortada', 3, false)},
        {
          text: 'Confirmar', handler: () => {

            const formData = new FormData();
            formData.append('id', f.idDocumento.toString());
            this.http.post(this.globalService.Url + 'RecepcionFacturas/envio', formData, {
              headers: {
                Authorization: 'Bearer=' + this.globalService.getAuthToken()
              }
            }).subscribe(() =>
            this.dialogService.presentToast('Factura con folio: ' + f.idDocumento + ' Enviada', 3.5, false).then(() => {
              this.index();
            }));
          }
        }]
    });
    await alert.present();
  }

  add() {
    this.restService.create<_recepcionFacturas>().subscribe(async datos => {
      const modal = await this.modalCtrl.create({
        component: FormRecepcionPage,
        cssClass: 'modal-wrapper-terminos',
        componentProps: {
          data: {title: 'Agregar ' + this.title, data: datos}
        }
      });
      await modal.present();
      const {data} = await modal.onDidDismiss();
      if ({data}.data !== undefined) {
        const result = {data}.data;
        const formData = new FormData();
        formData.append('id', result.id);
        if (result.file) {
          formData.append('file', result.file, result.file.name);
        }

        this.http.post(this.globalService.Url + 'RecepcionFacturas/save', formData, { headers: {
            Authorization: 'Bearer=' + this.globalService.getAuthToken()
          }
        }).subscribe(() =>
          this.dialogService.presentToast('¡¡ ' + this.subtitle + ' Creado Exitosamente!!', 3.5, false).then(() => this.index()));
      }
    });
  }
}
