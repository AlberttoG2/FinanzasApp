import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportacionesPage } from './importaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ImportacionesPage
  },
  {
    path: 'form-importaciones',
    loadChildren: () => import('./form-importaciones/form-importaciones.module').then( m => m.FormImportacionesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportacionesPageRoutingModule {}
