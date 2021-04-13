import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../../../services/rest.service';
import {_autorizacionDePagos, _operacion} from '../../../../../interfaces/data.interface';
import {FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../../../../services/global.service';
import {AlertController, ModalController} from '@ionic/angular';
import {DetalleOperacionPage} from '../detalle-operacion/detalle-operacion.page';
import {DialogService} from '../../../../../services/dialog.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-revisar-pagos',
  templateUrl: './revisar-pagos.page.html',
  styleUrls: ['./revisar-pagos.page.scss'],
})
export class RevisarPagosPage implements OnInit {
  public listado: _autorizacionDePagos[];
  public listadoDeBusqueda: _autorizacionDePagos[];
  busqueda: FormGroup;
  public cards: _autorizacionDePagos[];

  constructor(private restService: RestService,
              private globalService: GlobalService,
              public modalController: ModalController,
              public alertController: AlertController,
              private dialogService: DialogService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.restService.initService('AutorizacionDePagos');
    this.busqueda = this.restService.buildForm({
      fecha: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  cargarOperaciones() {
    // const opts = this.globalService.getHttpOptions();
    // opts['params'] = {
    //   operacion: this.busqueda.get('tipo'),
    //   estado: '-',
    //   fecha: this.busqueda.get('fecha')
    // };
    // const dia = new Date(this.busqueda.get('fecha').value);
    // console.log(dia);
    this.restService.index<_autorizacionDePagos[]>({operacion: this.busqueda.get('tipo').value,
      estado: '-',
      fecha: new Date(this.busqueda.get('fecha').value)}, 'cargarPagos').subscribe(respuesta => {
      this.cards = respuesta;
      this.listado = respuesta;
    });
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

  editCall(row) {
    // tslint:disable-next-line:prefer-const
    let info: _operacion;
    const opts = this.globalService.getHttpOptions();
    opts['params'] = {operacion: row.operacion, folio: row.folio};
    this.http.get<_operacion>(this.globalService.Url + 'AutorizacionDePagos/' + 'cargarOperacion', opts).subscribe(async result => {
      // const dialogRef = this.dialog.open(OperacionesComponent, { data: result[0] });
      // dialogRef.afterClosed().subscribe();
      const modal = await this.modalController.create({
        component: DetalleOperacionPage,
        componentProps: {
          data: {data: result[0]}
        }
      });
      await modal.present();
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

  regresar() {
    this.cards = null;
    this.listado = null;
    this.ngOnInit();
  }
}
