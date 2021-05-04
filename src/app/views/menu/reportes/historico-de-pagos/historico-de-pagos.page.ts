import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {RestService} from '../../../../services/rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {_combo, _historicoPagos} from '../../../../interfaces/data.interface';

@Component({
  selector: 'app-historico-de-pagos',
  templateUrl: './historico-de-pagos.page.html',
  styleUrls: ['./historico-de-pagos.page.scss'],
})
export class HistoricoDePagosPage implements OnInit {
  public razonSocialCombo: _combo[];
  public formulario: FormGroup;
  public cards: _historicoPagos[];
  public listadoBusqueda: _historicoPagos[];
  dominio = 'Reporte';

  constructor(private screenOrientation: ScreenOrientation, private restService: RestService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.restService.initService(this.dominio);
    this.restService.combo<_combo[]>({id: 'RazonSocial'}, 'comboController').subscribe(result =>
      this.razonSocialCombo = result);
    this.formulario = new FormGroup({
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      operacion: new FormControl('')
    });
  }

  regresar() {
  }

  cargarOperaciones() {
    this.restService.index<any>( {
      fechaInicio: this.formulario.get('fechaInicio').value,
      fechaFin: this.formulario.get('fechaFin').value,
      operacion: this.formulario.get('operacion').value
    }, 'reporteHistoricoPagos').subscribe(res => {
      this.cards = res;
      this.listadoBusqueda = res;
    });
  }
}
