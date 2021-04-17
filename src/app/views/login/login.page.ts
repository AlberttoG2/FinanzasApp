import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../../services/global.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthGuard} from '../../services/auth.guard';
import {Router} from '@angular/router';
import {DialogService} from '../../services/dialog.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private http: HttpClient, private globalService: GlobalService, private formBuilder: FormBuilder,
    private authGuard: AuthGuard, private router: Router, private dialogService: DialogService,
    private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    const validar = this.validarSesion();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    validar.subscribe(data => {
      const c = data as any;
      this.authGuard.saveCredentials(c.role, c.role, c.avatar, c.usuario);
      this.router.navigate(['/menu/dashboard']);
    });
  }

  login() {
    const signinData = this.loginForm.value;
    this.http.post(this.globalService.Url + 'api/login', signinData).subscribe(data => {
      const d = data as any;
      let options;
      this.authGuard.autenticar(d.access_token, signinData.username);
      options = this.globalService.getHttpOptions();
      options.params = {id: signinData.username};
      this.http.get(this.globalService.Url + 'init/getsession', options).subscribe(next => {
        const c = next as any;
        this.authGuard.saveCredentials(c.role, c.role, c.avatar, c.usuario);
        this.dialogService.presentToast('Bienvenido ' + c.usuario, 4, true);
        this.router.navigate(['/menu/dashboard']);
      });
    });

  }

  validarSesion(){
    return this.http.get(
      this.globalService.Url + 'init/getsession', this.globalService.getHttpOptions()
    );
  }
}
