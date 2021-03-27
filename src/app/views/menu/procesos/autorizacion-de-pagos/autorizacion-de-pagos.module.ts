import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorizacionDePagosPageRoutingModule } from './autorizacion-de-pagos-routing.module';

import { AutorizacionDePagosPage } from './autorizacion-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorizacionDePagosPageRoutingModule
  ],
  declarations: [AutorizacionDePagosPage]
})
export class AutorizacionDePagosPageModule {}
