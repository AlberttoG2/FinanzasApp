import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormImportacionesPageRoutingModule } from './form-importaciones-routing.module';

import { FormImportacionesPage } from './form-importaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormImportacionesPageRoutingModule
  ],
  declarations: [FormImportacionesPage]
})
export class FormImportacionesPageModule {}
