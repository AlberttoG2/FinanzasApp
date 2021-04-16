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
              private http: HttpClient) { }

  ngOnInit() {
    this.restService.initService('AutorizacionDePagos');
    this.busqueda = this.restService.buildForm({
      tipo: ['', Validators.required]
    });
  }

  cargarOperaciones(){
    this.restService.index<_autorizacionDePagos[]>({operacion: this.busqueda.get('tipo').value}, 'estatusDePago').subscribe(respuesta => {
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

}
