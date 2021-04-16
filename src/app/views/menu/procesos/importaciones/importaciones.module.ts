import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportacionesPageRoutingModule } from './importaciones-routing.module';

import { ImportacionesPage } from './importaciones.page';
import {ComponentsModule} from '../../../../components/components.module';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportacionesPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule
  ],
  declarations: [ImportacionesPage]
})
export class ImportacionesPageModule {}
