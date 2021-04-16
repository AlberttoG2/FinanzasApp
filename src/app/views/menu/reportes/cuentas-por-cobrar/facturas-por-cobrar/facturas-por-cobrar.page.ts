import { Component, OnInit } from '@angular/core';
import {_cuentasPorCobrar, _facturasXcobrar} from '../../../../../interfaces/data.interface';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facturas-por-cobrar',
  templateUrl: './facturas-por-cobrar.page.html',
  styleUrls: ['./facturas-por-cobrar.page.scss'],
})
export class FacturasPorCobrarPage implements OnInit {
  listadoDeBusqueda: _facturasXcobrar[];
  cards: _facturasXcobrar[];
  busqueda: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  regresar() {

  }

  cargarOperaciones() {
  }
}
