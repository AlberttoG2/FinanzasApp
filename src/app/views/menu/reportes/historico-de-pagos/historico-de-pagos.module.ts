import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoDePagosPageRoutingModule } from './historico-de-pagos-routing.module';

import { HistoricoDePagosPage } from './historico-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoDePagosPageRoutingModule
  ],
  declarations: [HistoricoDePagosPage]
})
export class HistoricoDePagosPageModule {}
