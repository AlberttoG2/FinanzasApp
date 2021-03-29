import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosDePagoPageRoutingModule } from './terminos-de-pago-routing.module';

import { TerminosDePagoPage } from './terminos-de-pago.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosDePagoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TerminosDePagoPage]
})
export class TerminosDePagoPageModule {}
