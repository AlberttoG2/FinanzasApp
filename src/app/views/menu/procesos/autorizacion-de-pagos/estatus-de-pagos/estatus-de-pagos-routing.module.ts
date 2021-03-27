import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatusDePagosPage } from './estatus-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: EstatusDePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatusDePagosPageRoutingModule {}
