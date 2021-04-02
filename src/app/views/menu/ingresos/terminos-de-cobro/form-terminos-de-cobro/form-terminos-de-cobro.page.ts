import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../../../services/rest.service';
import {IonicSelectableComponent} from 'ionic-selectable';
import {_combo} from '../../../../../interfaces/data.interface';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-form-terminos-de-cobro',
  templateUrl: './form-terminos-de-cobro.page.html',
  styleUrls: ['./form-terminos-de-cobro.page.scss'],
})
export class FormTerminosDeCobroPage implements OnInit {
  formTerminosDeCobro: FormGroup;
  @Input() data;
  public clientesCombo: _combo[];

  constructor(private restService: RestService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    console.log(this.data);
    this.restService.combo<_combo[]>({id: 'Clientes'}, 'comboController').subscribe(result => this.clientesCombo = result);
    this.formTerminosDeCobro = this.restService.buildForm({
      id: [this.data.data.id ? this.data.data.id : ''],
      cliente: [this.data.data.cliente ? this.data.data.cliente.id : '', Validators.required],
      fechaDeFactura: [this.data.data.fechaDeFactura ? this.data.data.fechaDeFactura : false, Validators.required],
      fechaDeRecepcion: [this.data.data.fechaDeRecepcion ? this.data.data.fechaDeRecepcion : false, Validators.required],
      diasDeCredito: [this.data.data.diasDeCredito ? this.data.data.diasDeCredito : '', Validators.required],
    });
  }

  parchar(event: { component: IonicSelectableComponent, value: any }) {
    this.formTerminosDeCobro.patchValue({cliente: event.value.id});
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    console.log(this.formTerminosDeCobro.value);
    this.modalCtrl.dismiss(this.formTerminosDeCobro.value);
  }
}
