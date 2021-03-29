import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosDeCobroPageRoutingModule } from './terminos-de-cobro-routing.module';

import { TerminosDeCobroPage } from './terminos-de-cobro.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TerminosDeCobroPageRoutingModule,
        ComponentsModule
    ],
  declarations: [TerminosDeCobroPage]
})
export class TerminosDeCobroPageModule {}
