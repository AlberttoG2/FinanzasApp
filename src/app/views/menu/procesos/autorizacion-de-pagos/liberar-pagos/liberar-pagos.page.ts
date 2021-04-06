import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {_autorizacionDePagos} from '../../../../../interfaces/data.interface';
import {RestService} from '../../../../../services/rest.service';

@Component({
  selector: 'app-liberar-pagos',
  templateUrl: './liberar-pagos.page.html',
  styleUrls: ['./liberar-pagos.page.scss'],
})
export class LiberarPagosPage implements OnInit {
  busqueda: FormGroup;
  public cards: _autorizacionDePagos[];
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.initService('AutorizacionDePagos');
    this.busqueda = this.restService.buildForm({
      fecha: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  cargarOperaciones(){
    // const opts = this.globalService.getHttpOptions();
    // opts['params'] = {
    //   operacion: this.busqueda.get('tipo'),
    //   estado: '-',
    //   fecha: this.busqueda.get('fecha')
    // };
    // const dia = new Date(this.busqueda.get('fecha').value);
    // console.log(dia);
    this.restService.index<_autorizacionDePagos[]>({operacion: this.busqueda.get('tipo').value,
      estado: 'Revisado',
      fecha: new Date(this.busqueda.get('fecha').value)}, 'cargarPagos').subscribe(respuesta => this.cards = respuesta);
  }
}
