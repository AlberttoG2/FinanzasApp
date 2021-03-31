import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresPage } from './proveedores.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresPage
  },
  /*{
    path: 'form-proveedores',
    loadChildren: () => import('./form-proveedores/form-proveedores.module').then(m => m.FormProveedoresPageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedoresPageRoutingModule {}
