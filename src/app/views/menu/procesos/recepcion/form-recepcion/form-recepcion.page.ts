import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {_combo} from '../../../../../interfaces/data.interface';
import {RestService} from '../../../../../services/rest.service';
import {ModalController} from '@ionic/angular';
import {IonicSelectableComponent} from 'ionic-selectable';

@Component({
  selector: 'app-form-recepcion',
  templateUrl: './form-recepcion.page.html',
  styleUrls: ['./form-recepcion.page.scss'],
})
export class FormRecepcionPage implements OnInit {

  formTerminosDePago: FormGroup;
  @Input() data;
  public proveedoresCombo: _combo[];

  constructor(private restService: RestService,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
    console.log(this.data);
    this.restService.combo<_combo[]>({id: 'Proveedores'}, 'comboController').subscribe(result => this.proveedoresCombo = result);
    this.formTerminosDePago = this.restService.buildForm({
      id: [this.data.data.id ? this.data.data.id : ''],
      file: [ '', Validators.required]
    });
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    console.log(this.formTerminosDePago.value);
    this.modalCtrl.dismiss(this.formTerminosDePago.value);
  }

  onFileChange(event) {
    const reader = new FileReader();
    const [file] = event.target.files;
    this.formTerminosDePago.patchValue({file: file});
  }
}
