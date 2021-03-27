import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormImportacionesPage } from './form-importaciones.page';

const routes: Routes = [
  {
    path: '',
    component: FormImportacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormImportacionesPageRoutingModule {}
