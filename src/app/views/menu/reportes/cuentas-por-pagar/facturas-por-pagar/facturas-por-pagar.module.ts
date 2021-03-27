import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPorPagarPageRoutingModule } from './facturas-por-pagar-routing.module';

import { FacturasPorPagarPage } from './facturas-por-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturasPorPagarPageRoutingModule
  ],
  declarations: [FacturasPorPagarPage]
})
export class FacturasPorPagarPageModule {}
