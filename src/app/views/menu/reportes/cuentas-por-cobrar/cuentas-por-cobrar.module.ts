import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentasPorCobrarPageRoutingModule } from './cuentas-por-cobrar-routing.module';

import { CuentasPorCobrarPage } from './cuentas-por-cobrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentasPorCobrarPageRoutingModule
  ],
  declarations: [CuentasPorCobrarPage]
})
export class CuentasPorCobrarPageModule {}
