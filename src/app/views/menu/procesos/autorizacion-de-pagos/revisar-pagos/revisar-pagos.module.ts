import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisarPagosPageRoutingModule } from './revisar-pagos-routing.module';

import { RevisarPagosPage } from './revisar-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisarPagosPageRoutingModule
  ],
  declarations: [RevisarPagosPage]
})
export class RevisarPagosPageModule {}