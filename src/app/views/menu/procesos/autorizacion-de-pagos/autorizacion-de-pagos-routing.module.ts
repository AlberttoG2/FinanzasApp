import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizacionDePagosPage } from './autorizacion-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: AutorizacionDePagosPage
  },
  {
    path: 'estatus-de-pagos',
    loadChildren: () => import('./estatus-de-pagos/estatus-de-pagos.module').then( m => m.EstatusDePagosPageModule)
  },
  {
    path: 'liberar-pagos',
    loadChildren: () => import('./liberar-pagos/liberar-pagos.module').then( m => m.LiberarPagosPageModule)
  },
  {
    path: 'revisar-pagos',
    loadChildren: () => import('./revisar-pagos/revisar-pagos.module').then( m => m.RevisarPagosPageModule)
  },
  {
    path: 'detalle-operacion',
    loadChildren: () => import('./detalle-operacion/detalle-operacion.module').then( m => m.DetalleOperacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizacionDePagosPageRoutingModule {}
