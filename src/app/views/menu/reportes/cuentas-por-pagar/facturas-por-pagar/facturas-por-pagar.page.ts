import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-facturas-por-pagar',
  templateUrl: './facturas-por-pagar.page.html',
  styleUrls: ['./facturas-por-pagar.page.scss'],
})
export class FacturasPorPagarPage implements OnInit {

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
}
