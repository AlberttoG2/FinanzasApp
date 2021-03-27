import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasPorCobrarPage } from './cuentas-por-cobrar.page';

const routes: Routes = [
  {
    path: '',
    component: CuentasPorCobrarPage
  },
  {
    path: 'antiguedad-de-saldos',
    loadChildren: () => import('./antiguedad-de-saldos/antiguedad-de-saldos.module').then( m => m.AntiguedadDeSaldosPageModule)
  },
  {
    path: 'facturas-por-cobrar',
    loadChildren: () => import('./facturas-por-cobrar/facturas-por-cobrar.module').then( m => m.FacturasPorCobrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentasPorCobrarPageRoutingModule {}
