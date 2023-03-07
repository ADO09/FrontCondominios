import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropiedadeComponent } from './propiedade/propiedade.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PropertiesRoutingModule } from './properties-routing.module';
import { RegPropiedadComponent } from './reg-propiedad/reg-propiedad.component';



@NgModule({
  declarations: [
    PropiedadeComponent,
    RegPropiedadComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
