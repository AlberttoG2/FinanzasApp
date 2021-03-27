import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleOperacionPageRoutingModule } from './detalle-operacion-routing.module';

import { DetalleOperacionPage } from './detalle-operacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleOperacionPageRoutingModule
  ],
  declarations: [DetalleOperacionPage]
})
export class DetalleOperacionPageModule {}
