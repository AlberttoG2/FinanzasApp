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
      url: '/menu/ingresos',
      icon: 'wallet-outline'
    },
    {
      title: 'Egresos',
      url: '/menu/egresos',
      icon: 'cash-outline'
    },
    {
      title: 'Procesos',
      url: '/menu/procesos',
      icon: 'settings-outline'
    },
    {
      title: 'Reportes',
      url: '/menu/reportes',
      icon: 'newspaper-outline'
    }
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
