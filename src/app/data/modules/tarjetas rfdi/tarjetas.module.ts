import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TarjetasRfdiComponent } from './tarjetas-rfdi/tarjetas-rfdi.component';
import { TarjetasRoutingModule } from './tarjetas-routing.module';




@NgModule({
  declarations: [
    TarjetasRfdiComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    TarjetasRoutingModule
  ]
})
export class TarjetasModule { }
