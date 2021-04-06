import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../../../../services/rest.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-form-importaciones',
  templateUrl: './form-importaciones.page.html',
  styleUrls: ['./form-importaciones.page.scss'],
})
export class FormImportacionesPage implements OnInit {
  formImportaciones: FormGroup;
  @Input() data;

  constructor(private restService: RestService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.formImportaciones = this.restService.buildForm({
      id: [this.data.data.id ? this.data.data.id : ''],
      cuenta: [this.data.data.cuenta ? this.data.data.cuenta : false, Validators.required],
      fecha: [this.data.data.fecha ? this.data.data.fecha : false, Validators.required],
      montoAbono: [this.data.data.montoAbono ? this.data.data.montoAbono : '', Validators.required],
      montoCargo: [this.data.data.montoCargo ? this.data.data.montoCargo : '', Validators.required],
      tipoMovimiento: [this.data.data.tipoMovimiento ? this.data.data.tipoMovimiento : '', Validators.required],
      referencia: [this.data.data.referencia ? this.data.data.referencia : '', Validators.required],
    });
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    console.log(this.formImportaciones.value);
    this.modalCtrl.dismiss(this.formImportaciones.value);
  }

}
