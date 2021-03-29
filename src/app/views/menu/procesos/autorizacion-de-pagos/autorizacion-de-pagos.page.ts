import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-autorizacion-de-pagos',
  templateUrl: './autorizacion-de-pagos.page.html',
  styleUrls: ['./autorizacion-de-pagos.page.scss'],
})
export class AutorizacionDePagosPage implements OnInit {
  tabs: [
    {
      name: 'estatus-de-pagos',
      icon: 'desktop-outline',
      title: 'estatus-de-pagos'
    },
    {
      name: 'liberar-pagos',
      icon: 'desktop-outline',
      title: 'liberar-pagos'
    },
    {
      name: 'revisar-pagos',
      icon: 'desktop-outline',
      title: 'estatus-de-pagos'
    },
    {
      name: 'detalle-operacion',
      icon: 'desktop-outline',
      title: 'estatus-de-pagos'
    }
  ];

  constructor() {
}

ngOnInit(){
}

}
