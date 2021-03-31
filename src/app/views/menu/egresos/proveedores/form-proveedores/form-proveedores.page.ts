import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.page.html',
  styleUrls: ['./form-proveedores.page.scss'],
})
export class FormProveedoresPage implements OnInit {

  @Input() nombre;
  @Input() pais;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  SalirConDatos() {
    this.modalCtrl.dismiss({
      nombre: 'Vega',
      pais: 'india'
    });
  }

}
