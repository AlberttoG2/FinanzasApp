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
  @Input() nombre;
  @Input() pais;
  public formulario: FormGroup;
  submit: any;
  constructor( private modalCtrl: ModalController, private restService: RestService ) { }

  ngOnInit() {
    this.restService.combo<_combo[]> ({id: 'RazonSocial'}, 'comboController').subscribe(result => this.razonSocialCombo = result);
    this.restService.combo<_combo[]> ( {id: 'Divisa'}, 'comboController').subscribe( result => this.monedaCombo = result);
    this.formulario = this.restService.buildForm({
      id: ['', Validators.required],
      razonSocial: ['', Validators.required],
      nombre: ['', Validators.required],
      rfc: ['', Validators.required],
      moneda: ['', Validators.required],
      nombreDeContacto: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      contactoDeCobranza: ['', Validators.required],
      referencia: ['', Validators.required]
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
