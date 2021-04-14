import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpCalIInterceptor} from './http.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GlobalService} from './services/global.service';
import {RestService} from './services/rest.service';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {ComponentsModule} from './components/components.module';
import {NgApexchartsModule} from 'ng-apexcharts';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, NgApexchartsModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, ComponentsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'API_URL', useValue: environment.serverUrl},
    { provide: HTTP_INTERCEPTORS, useClass: HttpCalIInterceptor, multi: true},
    GlobalService, RestService, ScreenOrientation
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
