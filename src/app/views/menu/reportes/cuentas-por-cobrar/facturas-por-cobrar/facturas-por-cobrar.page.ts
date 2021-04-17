import { Component, OnInit } from '@angular/core';
import {_combo, _cuentasPorCobrar, _facturasXcobrar} from '../../../../../interfaces/data.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {RestService} from '../../../../../services/rest.service';

@Component({
  selector: 'app-facturas-por-cobrar',
  templateUrl: './facturas-por-cobrar.page.html',
  styleUrls: ['./facturas-por-cobrar.page.scss'],
})
export class FacturasPorCobrarPage implements OnInit {
  listadoDeBusqueda: _facturasXcobrar[];
  cards: _facturasXcobrar[];
  dominio = 'Reporte';
  public factura: FormGroup;
  public razonSocialCombo: _combo[];

  constructor(private screenOrientation: ScreenOrientation, private restService: RestService) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.initService(this.dominio);
    this.restService.combo<_combo[]>({id: 'RazonSocial'}, 'comboController').subscribe(result =>
      this.razonSocialCombo = result);
    this.formulario();
    // this.index();
  }

  formulario() {
    this.factura = this.restService.buildForm({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      razonSocial: [''],
      estatus: ['', Validators.required],
    });
  }

  index() {
    this.restService.index<any>({
      fechaInicio: this.factura.get('fechaInicio').value,
      fechaFin: this.factura.get('fechaFin').value,
      estatus: this.factura.get('estatus').value,
      razonSocial: this.factura.get('razonSocial').value,
    }, 'facturasXcobrarTable').subscribe(res => {
      this.listadoDeBusqueda = res;
      this.cards = res;
    });
  }

  regresar() {

  }
}
