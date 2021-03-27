import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntiguedadDeSaldosPage } from './antiguedad-de-saldos.page';

const routes: Routes = [
  {
    path: '',
    component: AntiguedadDeSaldosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntiguedadDeSaldosPageRoutingModule {}
