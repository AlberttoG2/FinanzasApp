import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard',
      icon: 'bar-chart-outline'
    },
    {
      title: 'Ingresos',
      children: [
        {
          title: 'Clientes',
          url: '/menu/ingresos/clientes',
          icon: 'wallet-outline'
        },
        {
          title: 'Terminos de Cobro',
          url: '/menu/ingresos/terminos-de-cobro',
          icon: 'wallet-outline'
        },
]
  },
    {
      title: 'Egresos',
      children: [
        {
      title: 'Proveedores'
      url: '/menu/egresos/proveedores',
      icon: 'cash-outline'
    },
        {
          title: 'Terminos de Pago'
          url: '/menu/egresos/terminos-de-pago',
          icon: 'cash-outline'
        },
]
},
    {
      title: 'Procesos',
      children: [
        {
      title: 'Autorizacion de Pagos'
      url: '/menu/procesos/autorizacion-de-pagos',
      icon: 'settings-outline'
    },
        {
          title: 'Importaciones'
          url: '/menu/procesos/importaciones',
          icon: 'settings-outline'
        },
        {
          title: 'Propuesta de Pagos'
          url: '/menu/procesos/propuesta-de-pagos',
          icon: 'settings-outline'
        },
        {
          title: 'Recepcion'
          url: '/menu/procesos/recepcion',
          icon: 'settings-outline'
        },
]
},
    {
      title: 'Reportes',
      children: [
        {
          title: 'Cuentas por Cobrar'
          url: '/menu/reportes/cuentas-por-cobrar',
          icon: 'newspaper-outline'
        },
        {
          title: 'Cuentas por Pagar'
          url: '/menu/reportes/cuentas-por-pagar',
          icon: 'newspaper-outline'
        },
        {
          title: 'Historico de Pagos'
          url: '/menu/reportes/historico-de-pagos',
          icon: 'newspaper-outline'
        },
        {
          title: 'Saldos'
          url: '/menu/reportes/Saldos',
          icon: 'newspaper-outline'
        },
        {
          title: 'Tablero de Control'
          url: '/menu/reportes/tablero-de-control',
          icon: 'newspaper-outline'
        },
      ]
    },
  ];

  selectedPath = '';
  constructor(private router: Router, private globalService: GlobalService, private http: HttpClient) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }


  logout() {
    const headers = this.globalService.getHttpOptions();
    this.globalService.destroyToken();
    this.http.post(this.globalService.Url + 'api/logout', {}, headers).subscribe(
      () => this.router.navigate(['/login'])
    );
  }
}
