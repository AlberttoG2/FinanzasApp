import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisarPagosPage } from './revisar-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: RevisarPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisarPagosPageRoutingModule {}
