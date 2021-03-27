import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatusDePagosPageRoutingModule } from './estatus-de-pagos-routing.module';

import { EstatusDePagosPage } from './estatus-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatusDePagosPageRoutingModule
  ],
  declarations: [EstatusDePagosPage]
})
export class EstatusDePagosPageModule {}
