import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProveedoresPageRoutingModule } from './form-proveedores-routing.module';

import { FormProveedoresPage } from './form-proveedores.page';
import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProveedoresPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule
  ],
  declarations: [FormProveedoresPage]
})
export class FormProveedoresPageModule {}
