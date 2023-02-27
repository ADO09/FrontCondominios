import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CuotasIngresosConfComponent } from './cuotas-ingresos-conf/cuotas-ingresos-conf.component';
import { IngresosRoutingModule } from './ingresos-routing.module';



@NgModule({
  declarations: [
    CuotasIngresosConfComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
