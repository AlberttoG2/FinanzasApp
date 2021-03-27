import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportacionesPageRoutingModule } from './importaciones-routing.module';

import { ImportacionesPage } from './importaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportacionesPageRoutingModule
  ],
  declarations: [ImportacionesPage]
})
export class ImportacionesPageModule {}
