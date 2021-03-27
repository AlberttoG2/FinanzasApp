import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTerminosDePagoPageRoutingModule } from './form-terminos-de-pago-routing.module';

import { FormTerminosDePagoPage } from './form-terminos-de-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTerminosDePagoPageRoutingModule
  ],
  declarations: [FormTerminosDePagoPage]
})
export class FormTerminosDePagoPageModule {}
