import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiberarPagosPageRoutingModule } from './liberar-pagos-routing.module';

import { LiberarPagosPage } from './liberar-pagos.page';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LiberarPagosPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [LiberarPagosPage]
})
export class LiberarPagosPageModule {}
