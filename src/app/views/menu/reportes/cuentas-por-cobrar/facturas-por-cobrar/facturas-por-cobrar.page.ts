import { Component, OnInit } from '@angular/core';
import {_cuentasPorCobrar, _facturasXcobrar} from '../../../../../interfaces/data.interface';
import {FormGroup} from '@angular/forms';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-facturas-por-cobrar',
  templateUrl: './facturas-por-cobrar.page.html',
  styleUrls: ['./facturas-por-cobrar.page.scss'],
})
export class FacturasPorCobrarPage implements OnInit {
  listadoDeBusqueda: _facturasXcobrar[];
  cards: _facturasXcobrar[];
  busqueda: FormGroup;

  constructor(private screenOrientation: ScreenOrientation) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  regresar() {

  }

  cargarOperaciones() {
  }
}
