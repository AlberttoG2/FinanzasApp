import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {_combo, _recepcionFacturas} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';
import {GlobalService} from '../../../../services/global.service';
import {DialogService} from '../../../../services/dialog.service';
import {AlertController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IonicSelectableComponent} from 'ionic-selectable';

@Component({
  selector: 'app-propuesta-de-pagos',
  templateUrl: './propuesta-de-pagos.page.html',
  styleUrls: ['./propuesta-de-pagos.page.scss'],
})
export class PropuestaDePagosPage implements OnInit {
  public domain = 'RecepcionFacturas';
  public listado: _recepcionFacturas[];
  public listadoDeBusqueda: _recepcionFacturas[];
  public getRowsSub: Subscription;
  public title = 'Clientes';
  public subtitle = 'Cliente';
  busqueda: FormGroup;
  public razonSocialCombo: _combo[];
  public proveedoresCombo: _combo[];
  constructor(private screenOrientation: ScreenOrientation, private restService: RestService, private globalService: GlobalService,
              private dialogService: DialogService, private alertCtrl: AlertController, private http: HttpClient) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.initService(this.domain);
    this.restService.combo<_combo[]>({id: 'RazonSocial'}, 'comboController').subscribe(result =>
      this.razonSocialCombo = result);
    this.restService.combo<_combo[]>({id: 'Proveedores'}, 'comboController').subscribe(result =>
      this.proveedoresCombo = result);
    this.busqueda = new FormGroup({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      razonSocial: new FormControl(''),
      proveedor: new FormControl(''),
    });
  }
  index(){
    this.getRowsSub = this.restService.index<_recepcionFacturas[]>({
      fechaInicio: this.busqueda.get('fechaInicio').value,
      fechaFin: this.busqueda.get('fechaFin').value,
      razonSocial: this.busqueda.get('razonSocial').value,
      proveedor: this.busqueda.get('proveedor').value
    }, 'propuestaPagos').subscribe(respuesta => {
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

  parcharR(event: { component: IonicSelectableComponent; value: any }) {
    this.busqueda.patchValue({razonSocial: event.value.id});
  }
  parcharP(event: { component: IonicSelectableComponent; value: any }) {
    this.busqueda.patchValue({proveedor: event.value.id});
  }

  regresar() {
    this.ngOnInit();
    this.listado = null;
    this.listadoDeBusqueda = null;
  }
}
