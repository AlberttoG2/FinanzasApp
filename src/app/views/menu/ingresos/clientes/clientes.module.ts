import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import {ComponentsModule} from '../../../../components/components.module';
import {IonicSelectableModule} from 'ionic-selectable';
import {FormClientesPage} from './form-clientes/form-clientes.page';


@NgModule({
    entryComponents: [
      FormClientesPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientesPageRoutingModule,
        ComponentsModule,
        IonicSelectableModule
    ],
  declarations: [ClientesPage]
})
export class ClientesPageModule {}
