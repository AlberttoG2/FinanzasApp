import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepcionPage } from './recepcion.page';

const routes: Routes = [
  {
    path: '',
    component: RecepcionPage
  },
  {
    path: 'form-recepcion',
    loadChildren: () => import('./form-recepcion/form-recepcion.module').then( m => m.FormRecepcionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcionPageRoutingModule {}
