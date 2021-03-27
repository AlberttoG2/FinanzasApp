import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturasPorCobrarPage } from './facturas-por-cobrar.page';

const routes: Routes = [
  {
    path: '',
    component: FacturasPorCobrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturasPorCobrarPageRoutingModule {}
