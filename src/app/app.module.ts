import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedTitleComponentService } from './data/services/shared-title-component.service';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './data/layout/dashboard/dashboard.component';
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
    {provide:LocationStrategy,useClass:PathLocationStrategy} ,SharedTitleComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
