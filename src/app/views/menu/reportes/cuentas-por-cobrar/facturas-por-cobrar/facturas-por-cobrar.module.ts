import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPorCobrarPageRoutingModule } from './facturas-por-cobrar-routing.module';

import { FacturasPorCobrarPage } from './facturas-por-cobrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturasPorCobrarPageRoutingModule
  ],
  declarations: [FacturasPorCobrarPage]
})
export class FacturasPorCobrarPageModule {}