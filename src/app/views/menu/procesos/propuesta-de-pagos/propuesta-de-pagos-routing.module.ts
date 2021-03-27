import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropuestaDePagosPage } from './propuesta-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: PropuestaDePagosPage
  },
  {
    path: 'form-propuesta-de-pagos',
    loadChildren: () => import('./form-propuesta-de-pagos/form-propuesta-de-pagos.module').then( m => m.FormPropuestaDePagosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropuestaDePagosPageRoutingModule {}
