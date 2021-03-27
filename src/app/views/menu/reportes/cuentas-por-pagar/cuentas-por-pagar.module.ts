import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentasPorPagarPageRoutingModule } from './cuentas-por-pagar-routing.module';

import { CuentasPorPagarPage } from './cuentas-por-pagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentasPorPagarPageRoutingModule
  ],
  declarations: [CuentasPorPagarPage]
})
export class CuentasPorPagarPageModule {}
