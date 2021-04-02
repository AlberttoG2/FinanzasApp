import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTerminosDeCobroPageRoutingModule } from './form-terminos-de-cobro-routing.module';

import { FormTerminosDeCobroPage } from './form-terminos-de-cobro.page';
import {ComponentsModule} from '../../../../../components/components.module';
import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTerminosDeCobroPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [FormTerminosDeCobroPage]
})
export class FormTerminosDeCobroPageModule {}
