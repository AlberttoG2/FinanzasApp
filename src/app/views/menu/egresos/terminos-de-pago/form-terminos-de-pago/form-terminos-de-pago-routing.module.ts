import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTerminosDePagoPage } from './form-terminos-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: FormTerminosDePagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTerminosDePagoPageRoutingModule {}
