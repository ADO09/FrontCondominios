import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EgresosComponent } from './egresos/egresos.component';
import { EgresosRoutingModule } from './egresos-routing.module';




@NgModule({
  declarations: [
    EgresosComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    EgresosRoutingModule
  ]
})
export class EgresosModule { }
