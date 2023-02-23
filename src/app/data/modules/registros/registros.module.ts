import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegAdminFraccionamientoComponent } from './reg-admin-fraccionamiento/reg-admin-fraccionamiento.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegsRoutingModule } from './negistros-routing.module';



@NgModule({
  declarations: [
    RegAdminFraccionamientoComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegsRoutingModule
  ]
})
export class RegistrosModule { }
