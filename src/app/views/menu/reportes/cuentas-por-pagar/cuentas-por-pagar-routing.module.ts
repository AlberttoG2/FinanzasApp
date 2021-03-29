import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasPorPagarPage } from './cuentas-por-pagar.page';

const routes: Routes = [
  {
    path: '',
    component: CuentasPorPagarPage,
    children: [
      {
        path: 'antiguedad-de-saldos',
        loadChildren: () => import('./antiguedad-de-saldos/antiguedad-de-saldos.module').then( m => m.AntiguedadDeSaldosPageModule)
      },
      {
        path: 'facturas-por-pagar',
        loadChildren: () => import('./facturas-por-pagar/facturas-por-pagar.module').then( m => m.FacturasPorPagarPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentasPorPagarPageRoutingModule {}
