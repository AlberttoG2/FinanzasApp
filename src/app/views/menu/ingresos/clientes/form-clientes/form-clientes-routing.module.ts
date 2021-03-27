import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormClientesPage } from './form-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: FormClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormClientesPageRoutingModule {}
