import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormImportacionesPageRoutingModule } from './form-importaciones-routing.module';

import { FormImportacionesPage } from './form-importaciones.page';
import {ComponentsModule} from "../../../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormImportacionesPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [FormImportacionesPage]
})
export class FormImportacionesPageModule {}
