import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {GlobalService} from './global.service';
import {FormBuilder} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class RestService {
  private controlador: string;
  dialogData: any;

  dataChange: BehaviorSubject<any[]> = new BehaviorSubject< any[] >([]);

  constructor(private http: HttpClient, private globalService: GlobalService, private formBuilder: FormBuilder) {}

  get data(): any[] { return this.dataChange.value; }
  getDialogData() { return this.dialogData; }

  initService(controlador) { this.controlador = controlador;  }

  /** CRUD METHODS */
  getAdvancedTable<T>(controlador: string, parametros?: { [key: string]: any; }, accion?: string): void {
    const opts = this.globalService.getHttpOptions();
    let action = '';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    this.http.get<T[]>(this.globalService.Url + controlador + '/' + action, opts).subscribe(
      (data) => { this.dataChange.next(data); }, (error: HttpErrorResponse) => { console.log(error.name + ' ' + error.message); }
    );
  }

  index<T>(parametros?: { [key: string]: any; }, accion?: string) {
    const opts = this.globalService.getHttpOptions();
    let action = '';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    return this.http.get<T>(this.globalService.Url + this.controlador + '/' + action, opts);
  }

  buildForm(formItems: { [key: string]: any; }) { return this.formBuilder.group(formItems); }

  create<T>(parametros?: { [key: string]: any; }, accion?: string) {
    const opts = this.globalService.getHttpOptions();
    let action = 'create';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    return this.http.get<T>(this.globalService.Url + this.controlador + '/' + action, opts);
  }

  edit<T>(id, parametros?: { [key: string]: any; }, accion?: string) {
    const opts = this.globalService.getHttpOptions();
    let action = 'edit';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    return this.http.get<T>(this.globalService.Url + this.controlador + '/' + action + '/' + id, opts);
  }

  combo<T>(parametros?: {[key: string]: any}, accion?: string, controlador?: string) {
    const opts = this.globalService.getHttpOptions();
    let action = 'index';
    let controller = 'combo';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    if (controlador !== undefined && controlador !== '') { controller = controlador; }
    return this.http.get<T>(this.globalService.Url + controller + '/' + action, opts);
  }

  save<T>(datos: { [key: string]: any; }, parametros?: { [key: string]: any; }, accion?: string) {
    const opts = this.globalService.getHttpOptions();
    const data = datos;
    let action = 'save';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    return this.http.post<T>(this.globalService.Url + this.controlador + '/' + action, data, opts);
  }

  update<T>(id, datos: { [key: string]: any; }, parametros?: { [key: string]: any; }, accion?: string) {
    const opts = this.globalService.getHttpOptions();
    const data = datos;
    let action = 'update';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    return this.http.put<T>(this.globalService.Url + this.controlador + '/' + action + '/' + id, data, opts);
  }

  delete<T>(id, parametros?: { [key: string]: any; }, accion?: string) {
    const opts = this.globalService.getHttpOptions();
    let action = 'delete';
    if (parametros !== undefined) { opts['params'] = parametros; }
    if (accion !== undefined && accion !== '') { action = accion; }
    return this.http.delete<T>(this.globalService.Url + this.controlador + '/' + action + '/' + id, opts);
  }

  getReport(accion?: string, controlador?: string, parametros?: {[key: string]: any}) {
    const opts = this.globalService.getHttpOptionsReport();
    if (parametros !== undefined) { opts['params'] = parametros; }
    return this.http.get(this.globalService.Url + controlador + '/' + accion, opts);
  }

  printReport(observable: any, name: string) {
    observable.subscribe((response: any) => {
      const dataType = response.type;
      const binaryData = [];
      binaryData.push(response);
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      downloadLink.setAttribute('download', name);
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }
}
