import { Component, OnInit } from '@angular/core';
import {_combo, _cuentasPorCobrar} from '../../../../../interfaces/data.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {RestService} from '../../../../../services/rest.service';

@Component({
  selector: 'app-antiguedad-de-saldos',
  templateUrl: './antiguedad-de-saldos.page.html',
  styleUrls: ['./antiguedad-de-saldos.page.scss'],
})
export class AntiguedadDeSaldosPage implements OnInit {
  listadoDeBusqueda: _cuentasPorCobrar[];
  cards: _cuentasPorCobrar[];
  dominio =  'Reporte';
  public razonSocialCombo: _combo[];
  public formulario: FormGroup;

  constructor(private screenOrientation: ScreenOrientation, private restService: RestService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.initService(this.dominio);
    this.restService.combo<_combo[]>({id: 'RazonSocial'}, 'comboController').subscribe(result => this.razonSocialCombo = result);
    this.formulario = new FormGroup({ fechaInicio: new FormControl('', Validators.required), razonSocial: new FormControl('')});
  }

  index() {
    this.restService.index<any>(
      { fecha: this.formulario.get('fechaInicio').value, razonSocial: this.formulario.get('razonSocial').value },
      'cuentasXcobrarTable'
    ).subscribe(res => {
      this.listadoDeBusqueda = res;
      this.cards = res;
    });
  }
  cargarOperaciones() {
  }

  regresar() {
  }
}
