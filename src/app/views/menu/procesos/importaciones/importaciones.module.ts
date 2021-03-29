import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportacionesPageRoutingModule } from './importaciones-routing.module';

import { ImportacionesPage } from './importaciones.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImportacionesPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ImportacionesPage]
})
export class ImportacionesPageModule {}
