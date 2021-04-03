 import {Component, Input, OnInit} from '@angular/core';
 import {ModalController} from '@ionic/angular';
 import {_combo} from '../../../../../interfaces/data.interface';
 import {RestService} from '../../../../../services/rest.service';
 import {IonicSelectableComponent} from 'ionic-selectable';
 import {FormGroup, Validators} from '@angular/forms';

 @Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.page.html',
  styleUrls: ['./form-proveedores.page.scss'],
})
export class FormProveedoresPage implements OnInit {

  public razonSocialCombo: _combo[];
  public monedaCombo: _combo[];
  @Input() data;
  public formulario: FormGroup;
  submit: any;
  constructor( private modalCtrl: ModalController, private restService: RestService ) { }

  ngOnInit() {
    this.restService.combo<_combo[]>({id: 'RazonSocial'}, 'comboController').subscribe(result => this.razonSocialCombo = result);
    this.restService.combo<_combo[]>({id: 'Divisa'}, 'comboController').subscribe(result => this.monedaCombo = result);
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
      estatus: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  SalirConDatos() {
    this.modalCtrl.dismiss(this.formulario.value);
  }
  parchar(event: {component: IonicSelectableComponent, value: any }) {
      this.formulario.patchValue({razonSocial: event.value.id});
  }
  parche(event: {component: IonicSelectableComponent, value: any}) {
    this.formulario.patchValue({moneda: event.value.id});
  }
  cancel() {
    this.modalCtrl.dismiss();
  }
  save() {
    console.log(this.formulario.value);
    this.modalCtrl.dismiss(this.formulario.value);
  }
}
