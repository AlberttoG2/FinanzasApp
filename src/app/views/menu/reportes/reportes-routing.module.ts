import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cuentas-por-cobrar',
    loadChildren: () => import('./cuentas-por-cobrar/cuentas-por-cobrar.module').then( m => m.CuentasPorCobrarPageModule)
  },
  {
    path: 'cuentas-por-pagar',
    loadChildren: () => import('./cuentas-por-pagar/cuentas-por-pagar.module').then( m => m.CuentasPorPagarPageModule)
  },
  {
    path: 'historico-de-pagos',
    loadChildren: () => import('./historico-de-pagos/historico-de-pagos.module').then( m => m.HistoricoDePagosPageModule)
  },
  {
    path: 'saldos',
    loadChildren: () => import('./saldos/saldos.module').then( m => m.SaldosPageModule)
  },
  {
    path: 'tablero-de-control',
    loadChildren: () => import('./tablero-de-control/tablero-de-control.module').then( m => m.TableroDeControlPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesPageRoutingModule {}
