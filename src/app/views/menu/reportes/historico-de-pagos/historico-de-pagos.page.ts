import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-historico-de-pagos',
  templateUrl: './historico-de-pagos.page.html',
  styleUrls: ['./historico-de-pagos.page.scss'],
})
export class HistoricoDePagosPage implements OnInit {

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
