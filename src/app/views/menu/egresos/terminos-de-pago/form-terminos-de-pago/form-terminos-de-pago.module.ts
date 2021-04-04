import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTerminosDePagoPageRoutingModule } from './form-terminos-de-pago-routing.module';

import { FormTerminosDePagoPage } from './form-terminos-de-pago.page';
import {IonicSelectableModule} from "ionic-selectable";
import {ComponentsModule} from "../../../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTerminosDePagoPageRoutingModule,
    IonicSelectableModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [FormTerminosDePagoPage]
})
export class FormTerminosDePagoPageModule {}
