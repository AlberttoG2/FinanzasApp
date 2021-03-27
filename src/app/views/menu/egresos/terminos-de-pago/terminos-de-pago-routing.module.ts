import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosDePagoPage } from './terminos-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosDePagoPage
  },
  {
    path: 'form-terminos-de-pago',
    loadChildren: () => import('./form-terminos-de-pago/form-terminos-de-pago.module').then(m => m.FormTerminosDePagoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosDePagoPageRoutingModule {}
