import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MenuPage} from './views/menu/menu.page';
import {AuthGuard} from './services/auth.guard';
import {LoginPage} from './views/login/login.page';
import {NotFoundPage} from './views/not-found/not-found.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./views/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./views/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/menu/ingresos/clientes/clientes.module').then(m => m.ClientesPageModule)
  },
  {
    path: 'terminos-de-cobro',
    loadChildren: () => import('./views/menu/ingresos/terminos-de-cobro/terminos-de-cobro.module').then(m => m.TerminosDeCobroPageModule)
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./views/menu/egresos/proveedores/proveedores.module').then(m => m.ProveedoresPageModule)
  },
  {
    path: 'terminos-de-pago',
    loadChildren: () => import('./views/menu/egresos/terminos-de-pago/terminos-de-pago.module').then(m => m.TerminosDePagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
