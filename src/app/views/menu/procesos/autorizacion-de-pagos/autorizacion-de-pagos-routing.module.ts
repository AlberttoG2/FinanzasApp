import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizacionDePagosPage } from './autorizacion-de-pagos.page';
import {AuthGuard} from '../../../../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AutorizacionDePagosPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'revisar-pagos',
        loadChildren: () => import('./revisar-pagos/revisar-pagos.module').then(m => m.RevisarPagosPageModule)
      },
      {
        path: 'liberar-pagos',
        loadChildren: () => import('./liberar-pagos/liberar-pagos.module').then(m => m.LiberarPagosPageModule)
      },
      {
        path: 'estatus-de-pagos',
        loadChildren: () => import('./estatus-de-pagos/estatus-de-pagos.module').then(m => m.EstatusDePagosPageModule)
      },
      {
        path: 'detalle-operacion',
        loadChildren: () => import('./detalle-operacion/detalle-operacion.module').then(m => m.DetalleOperacionPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/revisar-pagos',
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/revisar-pagos',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorizacionDePagosPageRoutingModule {}
