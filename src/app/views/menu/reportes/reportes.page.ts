import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  tabs = [
    {
      name: 'viaticos',
      icon: 'newspaper-outline',
      title: 'Historico de Pagos'
    },
    {
      name: 'conceptos',
      icon: 'list',
      title: 'Cuentas por pagar'
    },
    {
      name: 'comprobantes',
      icon: 'document-text-outline',
      title: 'Cuentas por Cobrar'
    },
    {
      name: 'dashboard',
      icon: 'desktop-outline',
      title: 'Saldos'
    },
    {
      name: 'dashboard',
      icon: 'desktop-outline',
      title: 'Tablero de Control'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
