import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoDePagosPage } from './historico-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoDePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoDePagosPageRoutingModule {}
