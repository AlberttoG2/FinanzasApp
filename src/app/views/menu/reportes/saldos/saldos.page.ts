import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.page.html',
  styleUrls: ['./saldos.page.scss'],
})
export class SaldosPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  cargarOperaciones() {
  }

  regresar() {
  }
}
