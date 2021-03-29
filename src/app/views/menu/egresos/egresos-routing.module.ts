import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then(m => m.ProveedoresPageModule)
  },
  {
    path: 'terminos-de-pago',
    loadChildren: () => import('./terminos-de-pago/terminos-de-pago.module').then(m => m.TerminosDePagoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresosPageRoutingModule {}
