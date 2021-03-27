import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesosPage } from './procesos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesosPage
  },
  {
    path: 'autorizacion-de-pagos',
    loadChildren: () => import('./autorizacion-de-pagos/autorizacion-de-pagos.module').then( m => m.AutorizacionDePagosPageModule)
  },
  {
    path: 'importaciones',
    loadChildren: () => import('./importaciones/importaciones.module').then( m => m.ImportacionesPageModule)
  },
  {
    path: 'propuesta-de-pagos',
    loadChildren: () => import('./propuesta-de-pagos/propuesta-de-pagos.module').then( m => m.PropuestaDePagosPageModule)
  },
  {
    path: 'recepcion',
    loadChildren: () => import('./recepcion/recepcion.module').then( m => m.RecepcionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesosPageRoutingModule {}
