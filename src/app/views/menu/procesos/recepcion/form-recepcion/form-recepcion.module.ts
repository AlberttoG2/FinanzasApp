import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRecepcionPageRoutingModule } from './form-recepcion-routing.module';

import { FormRecepcionPage } from './form-recepcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRecepcionPageRoutingModule
  ],
  declarations: [FormRecepcionPage]
})
export class FormRecepcionPageModule {}
