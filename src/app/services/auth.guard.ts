import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate{
  constructor( private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.verificarLogin()){
      return true;
    }
    this.router.navigate(['/login']);
  }

  verificarLogin(): boolean {
    const auth = this.cookieService.get('authToken');
    if (auth !== undefined && auth !== ''){
      return true;
    }
    return false;
  }

  autenticar(token: string, username: string){
    this.cookieService.set('authToken', token, undefined, '/');
    this.cookieService.set('username', username, undefined, '/');
  }

  saveCredentials(role: string, puesto: string, avatar: string, usuario: string){
    this.cookieService.set('avatar', avatar, undefined, '/');
    this.cookieService.set('role', role, undefined, '/');
    this.cookieService.set('puesto', puesto, undefined, '/');
    this.cookieService.set('usuario', usuario, undefined, '/');
  }

  authToken() {
    return this.cookieService.get('authToken');
  }

  username() {
    return this.cookieService.get('username');
  }


  role() {
    return this.cookieService.get('role');
  }

  avatar() {
    return this.cookieService.get('avatar');
  }

  puesto() {
    return this.cookieService.get('puesto');
  }
  usuario() {
    return this.cookieService.get('usuario');
  }

  destroySession(){
    this.cookieService.delete('authToken', '/');
  }
}
