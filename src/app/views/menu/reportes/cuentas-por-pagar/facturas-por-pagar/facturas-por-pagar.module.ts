import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPorPagarPageRoutingModule } from './facturas-por-pagar-routing.module';

import { FacturasPorPagarPage } from './facturas-por-pagar.page';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FacturasPorPagarPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [FacturasPorPagarPage]
})
export class FacturasPorPagarPageModule {}
