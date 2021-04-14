import {Component, Input, OnInit} from '@angular/core';
import {_combo} from '../../../../../interfaces/data.interface';
import {FormGroup, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {RestService} from '../../../../../services/rest.service';
import {IonicSelectableComponent} from 'ionic-selectable';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.page.html',
  styleUrls: ['./form-clientes.page.scss'],
})
export class FormClientesPage implements OnInit {

  public razonSocialCombo: _combo[];
  public monedaCombo: _combo[];
  @Input() data;
  public formulario: FormGroup;
  submit: any;
  constructor( private modalCtrl: ModalController, private restService: RestService ) { }

  ngOnInit() {
    this.restService.combo<_combo[]> ({id: 'RazonSocial'}, 'comboController').subscribe(result => this.razonSocialCombo = result);
    this.restService.combo<_combo[]> ( {id: 'Divisa'}, 'comboController').subscribe( result => this.monedaCombo = result);
    this.formulario = this.restService.buildForm({
      id: [this.data.data.id ? this.data.data.id : '', Validators.required],
      razonSocial: [this.data.data.razonSocial ? this.data.data.razonSocial.id : '', Validators.required],
      nombre: [this.data.data.nombre ? this.data.data.nombre : '', Validators.required],
      rfc: [this.data.data.rfc ? this.data.data.rfc : '', Validators.required],
      moneda: [this.data.data.moneda ? this.data.data.moneda.id : '', Validators.required],
      nombreDeContacto: [this.data.data.nombreDeContacto ? this.data.data.nombreDeContacto : '', Validators.required],
      correoElectronico: [this.data.data.correoElectronico ? this.data.data.correoElectronico : '', Validators.required],
      direccion: [this.data.data.direccion ? this.data.data.direccion : '', Validators.required],
      telefono: [this.data.data.telefono ? this.data.data.telefono : '', Validators.required],
      contactoDeCobranza: [this.data.data.contactoDeCobranza ? this.data.data.contactoDeCobranza : '', Validators.required],
      referencia: [this.data.data.referencia ? this.data.data.referencia : '', Validators.required]
    });
  }
  SalirConDatos(){
    this.modalCtrl.dismiss(this.formulario.value);
  }
  parchar(event: {component: IonicSelectableComponent, value: any}) {
    this.formulario.patchValue({razonSocial: event.value.id});
  }
  parche(event: {component: IonicSelectableComponent, value: any}) {
    this.formulario.patchValue( {moneda: event.value.id});
  }
  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    console.log(this.formulario.value);
    this.modalCtrl.dismiss(this.formulario.value);
  }
}
