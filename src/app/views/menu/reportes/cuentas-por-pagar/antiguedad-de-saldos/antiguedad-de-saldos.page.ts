import { Component, OnInit } from '@angular/core';
import {_cuentasPorPagar} from '../../../../../interfaces/data.interface';
import {FormGroup} from '@angular/forms';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-antiguedad-de-saldos',
  templateUrl: './antiguedad-de-saldos.page.html',
  styleUrls: ['./antiguedad-de-saldos.page.scss'],
})
export class AntiguedadDeSaldosPage implements OnInit {
listadoDeBusqueda: _cuentasPorPagar[];
cards: _cuentasPorPagar[];
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
