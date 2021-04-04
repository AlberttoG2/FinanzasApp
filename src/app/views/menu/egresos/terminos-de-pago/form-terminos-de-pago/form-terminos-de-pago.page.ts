import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {_combo} from '../../../../../interfaces/data.interface';
import {RestService} from '../../../../../services/rest.service';
import {ModalController} from '@ionic/angular';
import {IonicSelectableComponent} from 'ionic-selectable';

@Component({
  selector: 'app-form-terminos-de-pago',
  templateUrl: './form-terminos-de-pago.page.html',
  styleUrls: ['./form-terminos-de-pago.page.scss'],
})
export class FormTerminosDePagoPage implements OnInit {
  formTerminosDePago: FormGroup;
  @Input() data;
  public proveedoresCombo: _combo[];

  constructor(private restService: RestService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.data);
    this.restService.combo<_combo[]>({id: 'Proveedores'}, 'comboController').subscribe(result => this.proveedoresCombo = result);
    this.formTerminosDePago = this.restService.buildForm({
      id: [this.data.data.id ? this.data.data.id : ''],
      proveedor: [this.data.data.proveedor ? this.data.data.proveedor.id : '', Validators.required],
      fechaDeFactura: [this.data.data.fechaDeFactura ? this.data.data.fechaDeFactura : false, Validators.required],
      fechaDeRecepcion: [this.data.data.fechaDeRecepcion ? this.data.data.fechaDeRecepcion : false, Validators.required],
      diasDeCredito: [this.data.data.diasDeCredito ? this.data.data.diasDeCredito : '', Validators.required],
    });
  }
  parchar(event: { component: IonicSelectableComponent, value: any }) {
    this.formTerminosDePago.patchValue({proveedor: event.value.id});
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    console.log(this.formTerminosDePago.value);
    this.modalCtrl.dismiss(this.formTerminosDePago.value);
  }

}
