import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTerminosDeCobroPageRoutingModule } from './form-terminos-de-cobro-routing.module';

import { FormTerminosDeCobroPage } from './form-terminos-de-cobro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTerminosDeCobroPageRoutingModule
  ],
  declarations: [FormTerminosDeCobroPage]
})
export class FormTerminosDeCobroPageModule {}
