import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropiedadeComponent } from './propiedade/propiedade.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PropertiesRoutingModule } from './properties-routing.module';



@NgModule({
  declarations: [
    PropiedadeComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
