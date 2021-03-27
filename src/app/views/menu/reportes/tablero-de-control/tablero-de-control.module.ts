import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableroDeControlPageRoutingModule } from './tablero-de-control-routing.module';

import { TableroDeControlPage } from './tablero-de-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableroDeControlPageRoutingModule
  ],
  declarations: [TableroDeControlPage]
})
export class TableroDeControlPageModule {}
