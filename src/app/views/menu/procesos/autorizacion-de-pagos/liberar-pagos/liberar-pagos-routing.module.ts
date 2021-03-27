import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiberarPagosPage } from './liberar-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: LiberarPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiberarPagosPageRoutingModule {}
