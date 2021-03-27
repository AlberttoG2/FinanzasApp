import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleOperacionPage } from './detalle-operacion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleOperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleOperacionPageRoutingModule {}
