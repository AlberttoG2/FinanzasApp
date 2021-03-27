import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosDeCobroPage } from './terminos-de-cobro.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosDeCobroPage
  },
  {
    path: 'form-terminos-de-cobro',
    loadChildren: () => import('./form-terminos-de-cobro/form-terminos-de-cobro.module').then(m => m.FormTerminosDeCobroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosDeCobroPageRoutingModule {}
