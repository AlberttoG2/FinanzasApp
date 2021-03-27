import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTerminosDeCobroPage } from './form-terminos-de-cobro.page';

const routes: Routes = [
  {
    path: '',
    component: FormTerminosDeCobroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTerminosDeCobroPageRoutingModule {}
