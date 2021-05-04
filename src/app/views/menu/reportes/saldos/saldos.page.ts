import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {_combo, _saldos, _saldosBancarios} from '../../../../interfaces/data.interface';
import {RestService} from '../../../../services/rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.page.html',
  styleUrls: ['./saldos.page.scss'],
})
export class SaldosPage implements OnInit {
  cards: _saldos[];
  listadoDeBusqueda: _saldos[];
  dominio = 'Reporte';
  public razonSocialCombo: _combo[];
  public saldos: FormGroup;
  public aliasCombo: _combo[];
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
    this.saldos = new FormGroup({
      fecha: new FormControl('', Validators.required),
      razonSocial: new FormControl(''),
      alias: new FormControl('')
    });
  }

  cargarOperaciones() {
    this.restService.index<_saldos[]>({
      fecha: this.saldos.get('fecha').value,
      razonSocial: this.saldos.get('razonSocial').value,
      // alias: this.saldos.get('alias').value
    }, 'saldoTable').subscribe(res => {
      this.cards = res;
      this.listadoDeBusqueda = res;
    });
  }

  regresar() {
  }

  cargarAlias(event: any) {
    console.log(event);
    this.restService.combo<_combo[]>({id: event.value}, 'comboAlias').subscribe(result => this.aliasCombo = result);
  }
}
