import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {SubheaderComponent} from './subheader/subheader.component';



@NgModule({
  declarations: [
    HeaderComponent, SubheaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent, SubheaderComponent
  ]
})
export class ComponentsModule { }
