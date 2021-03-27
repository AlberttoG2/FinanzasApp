import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Router} from '@angular/router';
import {GlobalService} from './services/global.service';
import {DialogService} from './services/dialog.service';

@Injectable()
export class HttpCalIInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private router: Router, private globalVariable: GlobalService, private dialogService: DialogService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = {error: undefined, message: ''};
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage.error = error.error;
            errorMessage.message = 'Error: ' + error.error.message;
          } else {
            // server-side error
            errorMessage.error = error;
            errorMessage.message = error.message;
          }
          if (error.status === 401) {
            this.dialogService.presentToast('Iniciar Sesión', 4, false);
            this.globalVariable.destroyToken();
            this.router.navigate(['/']);
          }
          return throwError(error);
        })
      );
  }
}
