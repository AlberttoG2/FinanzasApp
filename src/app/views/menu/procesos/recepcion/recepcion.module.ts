import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcionPageRoutingModule } from './recepcion-routing.module';

import { RecepcionPage } from './recepcion.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RecepcionPageRoutingModule,
        ComponentsModule
    ],
  declarations: [RecepcionPage]
})
export class RecepcionPageModule {}
