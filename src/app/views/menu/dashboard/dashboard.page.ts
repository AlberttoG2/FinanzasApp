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
  f = [
    {name: 'Amsterdam'},
    {name: 'Bogota'},
    {name: 'Buenos Aires'},
    {name: 'Cairo'},
    {name: 'Dhaka'},
    {name: 'Edinburgh'},
    {name: 'Geneva'},
    {name: 'Genoa'},
    {name: 'Glasgow'},
    {name: 'Hanoi'},
    {name: 'Hong Kong'},
    {name: 'Islamabad'},
    {name: 'Istanbul'},
    {name: 'Jakarta'},
    {name: 'Kiel'},
    {name: 'Kyoto'},
    {name: 'Le Havre'},
    {name: 'Lebanon'},
    {name: 'Lhasa'},
    {name: 'Lima'},
    {name: 'London'},
    {name: 'Los Angeles'},
    {name: 'Madrid'},
    {name: 'Manila'},
    {name: 'New York'},
    {name: 'Olympia'},
    {name: 'Oslo'},
    {name: 'Panama City'},
    {name: 'Peking'},
    {name: 'Philadelphia'},
    {name: 'San Francisco'},
    {name: 'Seoul'},
    {name: 'Taipeh'},
    {name: 'Tel Aviv'},
    {name: 'Tokio'},
    {name: 'Uelzen'},
    {name: 'Washington'},
  ] ;
  foodListBackup: any;
  foodList: any;
  public domain = 'Proveedores';
  public listado: _proveedores[];
  public listadoDeBusqueda: any;
  public busqueda: _proveedores;
  public getRowsSub: Subscription;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.foodList = this.f;
    this.listadoDeBusqueda = this.listado;
    this.restService.initService(this.domain);
    this.index();
  }

  index(){
    this.getRowsSub = this.restService.index<_proveedores[]>().subscribe(respuesta => {
      this.listado = respuesta;
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
