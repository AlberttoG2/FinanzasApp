import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleOperacionPageRoutingModule } from './detalle-operacion-routing.module';

import { DetalleOperacionPage } from './detalle-operacion.page';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleOperacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleOperacionPage]
})
export class DetalleOperacionPageModule {}
