import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRecepcionPageRoutingModule } from './form-recepcion-routing.module';

import { FormRecepcionPage } from './form-recepcion.page';
import {ComponentsModule} from '../../../../../components/components.module';
import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRecepcionPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [FormRecepcionPage]
})
export class FormRecepcionPageModule {}
