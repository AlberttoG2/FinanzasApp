import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPorCobrarPageRoutingModule } from './facturas-por-cobrar-routing.module';

import { FacturasPorCobrarPage } from './facturas-por-cobrar.page';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FacturasPorCobrarPageRoutingModule,
        ComponentsModule
    ],
  declarations: [FacturasPorCobrarPage]
})
export class FacturasPorCobrarPageModule {}
