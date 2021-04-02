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
  @Input() nombre;
  @Input() pais;
  public formulario: FormGroup;
  submit: any;
  constructor( private modalCtrl: ModalController, private restService: RestService ) { }

  ngOnInit() {
    this.restService.combo<_combo[]> ({id: 'RazonSocial'}, 'comboController').subscribe(result => this.razonSocialCombo = result);
    this.formulario = this.restService.buildForm({
      razonSocial: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }
  SalirConDatos(){
    this.modalCtrl.dismiss(this.formulario.value);
  }
  parchar(event: {component: IonicSelectableComponent, value: any}) {
    this.formulario.patchValue({razonSocial: event.value.id});
  }
}
