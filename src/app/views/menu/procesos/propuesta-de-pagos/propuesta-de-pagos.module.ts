import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropuestaDePagosPageRoutingModule } from './propuesta-de-pagos-routing.module';

import { PropuestaDePagosPage } from './propuesta-de-pagos.page';
import {ComponentsModule} from '../../../../components/components.module';
import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropuestaDePagosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [PropuestaDePagosPage]
})
export class PropuestaDePagosPageModule {}
