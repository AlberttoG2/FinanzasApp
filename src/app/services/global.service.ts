import {Inject, Injectable} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GlobalService{
  constructor(@Inject('API_URL') private baseUrl: string, private auth: AuthGuard) {}
  Url = this.baseUrl;

  getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer=' + this.auth.authToken()
      })
    };
  }

  getHttpOptionsReport() {
    return {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        Authorization: 'Bearer=' + this.auth.authToken()
      })
    };
  }

  getAuthToken() {
    return this.auth.authToken();
  }

  getUsername() {
    return this.auth.username();
  }

  destroyToken() {
    this.auth.destroySession();
  }


  getRole() { return this.auth.role(); }
  getPuesto() { return this.auth.puesto(); }
  getUsuario() { return this.auth.usuario(); }
  getAvatar() { return this.auth.avatar(); }
}
