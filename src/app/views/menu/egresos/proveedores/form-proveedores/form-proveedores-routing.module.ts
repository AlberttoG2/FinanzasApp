import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProveedoresPage } from './form-proveedores.page';

const routes: Routes = [
  {
    path: '',
    component: FormProveedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProveedoresPageRoutingModule {}
