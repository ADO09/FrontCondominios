import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CuotasIngresosConfComponent } from './cuotas-ingresos-conf/cuotas-ingresos-conf.component';
import { IngresosRoutingModule } from './ingresos-routing.module';
import { RecibosGeneralesComponent } from './recibos-generales/recibos-generales.component';
import { RegistroConfPagoComponent } from './registro-conf-pago/registro-conf-pago.component';
import { ListadoComponent } from './recibo-pago/listado/listado.component';



@NgModule({
  declarations: [
    CuotasIngresosConfComponent,
    RecibosGeneralesComponent,
    RegistroConfPagoComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IngresosRoutingModule
  ],
  providers: [DatePipe],
})
export class IngresosModule { }
