import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormClientesPageRoutingModule } from './form-clientes-routing.module';

import { FormClientesPage } from './form-clientes.page';
import {IonicSelectableModule} from 'ionic-selectable';
import {ComponentsModule} from '../../../../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormClientesPageRoutingModule,
        IonicSelectableModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
  declarations: [FormClientesPage]
})
export class FormClientesPageModule {}
