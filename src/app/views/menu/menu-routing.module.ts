import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import {AuthGuard} from '../../services/auth.guard';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'ingresos',
        loadChildren: () => import('./ingresos/ingresos.module').then( m => m.IngresosPageModule)
      },
      {
        path: 'egresos',
        loadChildren: () => import('./egresos/egresos.module').then( m => m.EgresosPageModule)
      },
      {
        path: 'procesos',
        loadChildren: () => import('./procesos/procesos.module').then( m => m.ProcesosPageModule)
      },
      {
        path: 'reportes',
        loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
