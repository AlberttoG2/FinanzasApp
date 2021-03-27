import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormClientesPageRoutingModule } from './form-clientes-routing.module';

import { FormClientesPage } from './form-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormClientesPageRoutingModule
  ],
  declarations: [FormClientesPage]
})
export class FormClientesPageModule {}
