import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPropuestaDePagosPage } from './form-propuesta-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: FormPropuestaDePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPropuestaDePagosPageRoutingModule {}
