import { Component, OnInit } from '@angular/core';
import {_cuentasPorPagar} from '../../../../../interfaces/data.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-antiguedad-de-saldos',
  templateUrl: './antiguedad-de-saldos.page.html',
  styleUrls: ['./antiguedad-de-saldos.page.scss'],
})
export class AntiguedadDeSaldosPage implements OnInit {
listadoDeBusqueda: _cuentasPorPagar[];
cards: _cuentasPorPagar[];
busqueda: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  regresar() {
  }

  cargarOperaciones() {
  }
}
