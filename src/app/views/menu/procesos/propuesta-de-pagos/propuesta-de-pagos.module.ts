import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropuestaDePagosPageRoutingModule } from './propuesta-de-pagos-routing.module';

import { PropuestaDePagosPage } from './propuesta-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropuestaDePagosPageRoutingModule
  ],
  declarations: [PropuestaDePagosPage]
})
export class PropuestaDePagosPageModule {}
