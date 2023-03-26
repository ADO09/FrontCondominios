import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { EgresosComponent } from './egresos/egresos.component';
import { EgresosRoutingModule } from './egresos-routing.module';
import { GestionEgresosComponent } from './gestion-egresos/gestion-egresos.component';
import { RegEgresoComponent } from './reg-egreso/reg-egreso.component';
import { RegDetalleEgresoComponent } from './reg-detalle-egreso/reg-detalle-egreso.component';
import { ProductosComponent } from './productos/productos.component';




@NgModule({
  declarations: [
    EgresosComponent,
    GestionEgresosComponent,
    RegEgresoComponent,
    RegDetalleEgresoComponent,
    ProductosComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    EgresosRoutingModule
  ]
})
export class EgresosModule { }
