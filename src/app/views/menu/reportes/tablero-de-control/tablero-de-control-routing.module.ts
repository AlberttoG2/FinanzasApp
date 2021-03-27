import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableroDeControlPage } from './tablero-de-control.page';

const routes: Routes = [
  {
    path: '',
    component: TableroDeControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableroDeControlPageRoutingModule {}
