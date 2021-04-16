import { Component, OnInit } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tablero-de-control',
  templateUrl: './tablero-de-control.page.html',
  styleUrls: ['./tablero-de-control.page.scss'],
})
export class TableroDeControlPage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(){
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

}
