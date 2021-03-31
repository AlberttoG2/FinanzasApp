import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedoresPageRoutingModule } from './proveedores-routing.module';

import { ProveedoresPage } from './proveedores.page';
import {ComponentsModule} from '../../../../components/components.module';
import {FormProveedoresPage} from './form-proveedores/form-proveedores.page';
import {FormProveedoresPageModule} from './form-proveedores/form-proveedores.module';

@NgModule({
  entryComponents: [
    FormProveedoresPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedoresPageRoutingModule,
    ComponentsModule,
    FormProveedoresPageModule
  ],
  declarations: [ProveedoresPage]
})
export class ProveedoresPageModule {}
