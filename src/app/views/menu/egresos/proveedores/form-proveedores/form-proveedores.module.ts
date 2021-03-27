import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProveedoresPageRoutingModule } from './form-proveedores-routing.module';

import { FormProveedoresPage } from './form-proveedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormProveedoresPageRoutingModule
  ],
  declarations: [FormProveedoresPage]
})
export class FormProveedoresPageModule {}
