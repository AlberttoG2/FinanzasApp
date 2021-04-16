import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaldosPageRoutingModule } from './saldos-routing.module';

import { SaldosPage } from './saldos.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SaldosPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [SaldosPage]
})
export class SaldosPageModule {}
