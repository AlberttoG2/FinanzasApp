import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesPageModule)
  },
  {
    path: 'terminos-de-cobro',
    loadChildren: () => import('./terminos-de-cobro/terminos-de-cobro.module').then(m => m.TerminosDeCobroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosPageRoutingModule {}
