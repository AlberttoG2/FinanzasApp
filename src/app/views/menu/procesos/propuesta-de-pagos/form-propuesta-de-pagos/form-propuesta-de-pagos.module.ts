import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPropuestaDePagosPageRoutingModule } from './form-propuesta-de-pagos-routing.module';

import { FormPropuestaDePagosPage } from './form-propuesta-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPropuestaDePagosPageRoutingModule
  ],
  declarations: [FormPropuestaDePagosPage]
})
export class FormPropuestaDePagosPageModule {}
