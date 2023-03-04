import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedTitleComponentService } from './data/services/shared-title-component.service';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './data/layout/dashboard/dashboard.component';
import { UsuariosService } from './data/services/api/usuarios/usuarios.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './data/services/middleware/auth-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [

    //core
    CoreModule,

    //Shared
    SharedModule,


    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },{provide:LocationStrategy,useClass:PathLocationStrategy} ,SharedTitleComponentService ,UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
