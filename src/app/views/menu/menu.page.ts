import {Component, OnInit} from '@angular/core';
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
      icon: 'wallet-outline',
      children: [
        {
          title: 'Clientes',
          url: '/menu/ingresos/clientes',
          icon: 'people'
        },
        {
          title: 'Terminos de Cobro',
          url: '/menu/ingresos/terminos-de-cobro',
          icon: 'briefcase-outline'
        },
      ]
    },
    {
      title: 'Egresos',
      icon: 'cash-outline',
      children: [
        {
          title: 'Proveedores',
          url: '/menu/egresos/proveedores',
          icon: 'business-outline'
        },
        {
          title: 'Terminos de Pago',
          url: '/menu/egresos/terminos-de-pago',
          icon: 'briefcase-outline'
        },
      ]
    },
    {
      title: 'Procesos',
      icon: 'settings-outline',
      children: [
        {
          title: 'Autorizacion de Pagos',
          url: '/menu/procesos/autorizacion-de-pagos/revisar-pagos',
          icon: 'thumbs-up-outline'
        },
        {
          title: 'Importación de Archivos',
          url: '/menu/procesos/importaciones',
          icon: 'folder-open-outline'
        },
        {
          title: 'Propuesta de Pagos',
          url: '/menu/procesos/propuesta-de-pagos',
          icon: 'chatbubble-ellipses-outline'
        },
        {
          title: 'Recepción de Facturas',
          url: '/menu/procesos/recepcion',
          icon: 'document-attach-outline'
        },
      ]
    },
    {
      title: 'Reportes',
      icon: 'newspaper-outline',
      children: [
        {
          title: 'Cuentas por Cobrar',
          url: '/menu/reportes/cuentas-por-cobrar/antiguedad-de-saldos',
          icon: 'pricetags-outline'
        },
        {
          title: 'Cuentas por Pagar',
          url: '/menu/reportes/cuentas-por-pagar/antiguedad-de-saldos',
          icon: 'wallet-outline'
        },
        {
          title: 'Historico de Pagos',
          url: '/menu/reportes/historico-de-pagos',
          icon: 'calendar-outline'
        },
        {
          title: 'Saldos Bancarios',
          url: '/menu/reportes/saldos',
          icon: 'cash-outline'
        },
        // {
        //   title: 'Tablero de Control',
        //   url: '/menu/reportes/tablero-de-control',
        //   icon: 'clipboard'
        // },
      ]
    },
  ];

  selectedPath = '';
  public avatar: string;
  public role: string;
  public usuario: any;

  constructor(private router: Router, private globalService: GlobalService, private http: HttpClient) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.avatar = this.globalService.getAvatar();
    this.role = this.globalService.getRole();
    this.usuario = this.globalService.getUsuario();
  }


  logout() {
    const headers = this.globalService.getHttpOptions();
    this.globalService.destroyToken();
    this.http.post(this.globalService.Url + 'api/logout', {}, headers).subscribe(
      () => this.router.navigate(['/login'])
    );
  }
}
