import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisarPagosPageRoutingModule } from './revisar-pagos-routing.module';

import { RevisarPagosPage } from './revisar-pagos.page';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RevisarPagosPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [RevisarPagosPage]
})
export class RevisarPagosPageModule {}
