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

  public monedaCombo: _combo[];
  @Input() data;
  public formulario: FormGroup;
  submit: any;
  constructor( private modalCtrl: ModalController, private restService: RestService ) { }

  ngOnInit() {
    this.restService.combo<_combo[]>({id: 'Divisa'}, 'comboController').subscribe(result => this.monedaCombo = result);
    this.formulario = this.restService.buildForm({
      id: [this.data.data.id ? this.data.data.id : ''],
      nombre: [this.data.data.nombre ? this.data.data.nombre : '', Validators.required],
      rfc: [this.data.data.rfc ? this.data.data.rfc : '', [Validators.required, Validators.min(12), Validators.max(13)]],
      moneda: [this.data.data.moneda ? this.data.data.moneda.id : '', Validators.required],
      nombreDeContacto: [this.data.data.nombreDeContacto ? this.data.data.nombreDeContacto : '', Validators.required],
      correoElectronico: [this.data.data.correoElectronico ? this.data.data.correoElectronico : '', Validators.required],
      direccion: [this.data.data.direccion ? this.data.data.direccion : '', Validators.required],
      telefono: [this.data.data.telefono ? this.data.data.telefono : '', Validators.required],
      estatus: [this.data.data.estatus ? this.data.data.estatus : '', Validators.required],
      tipo: [this.data.data.tipo ? this.data.data.tipo : '', Validators.required]
    });
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
