import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {_recepcionFacturas} from '../../../../interfaces/data.interface';
import {Subscription} from 'rxjs';
import {RestService} from '../../../../services/rest.service';

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
  constructor(private screenOrientation: ScreenOrientation, private restService: RestService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.initService(this.domain);
    this.index();
  }
  index(){
    this.getRowsSub = this.restService.index<_recepcionFacturas[]>({}, 'propuestaPagos').subscribe(respuesta => {
      this.listado = respuesta;
      this.listadoDeBusqueda = respuesta;
    });
  }
}
