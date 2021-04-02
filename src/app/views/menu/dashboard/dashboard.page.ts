import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {_proveedores} from '../../../interfaces/data.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public domain = 'Proveedores';
  public listado: _proveedores[];
  public listadoDeBusqueda: any;
  public getRowsSub: Subscription;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }

  index(){
    this.getRowsSub = this.restService.index<_proveedores[]>().subscribe(respuesta => {
      this.listado = respuesta;
      this.listadoDeBusqueda = respuesta;
    });
  }

  async filterList(evt) {
    this.listadoDeBusqueda = this.listado;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.listadoDeBusqueda = this.listadoDeBusqueda.filter(currentFood => {
      if (currentFood.rfc && searchTerm) {
        return (currentFood.rfc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
