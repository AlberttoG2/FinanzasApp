import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntiguedadDeSaldosPageRoutingModule } from './antiguedad-de-saldos-routing.module';

import { AntiguedadDeSaldosPage } from './antiguedad-de-saldos.page';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AntiguedadDeSaldosPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [AntiguedadDeSaldosPage]
})
export class AntiguedadDeSaldosPageModule {}
