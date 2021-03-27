import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiguedadDeSaldosPageRoutingModule } from './antiguedad-de-saldos-routing.module';

import { AntiguedadDeSaldosPage } from './antiguedad-de-saldos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntiguedadDeSaldosPageRoutingModule
  ],
  declarations: [AntiguedadDeSaldosPage]
})
export class AntiguedadDeSaldosPageModule {}
