import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { RegistroComponent } from './registro/registro.component';
import { ListadoComponent } from './listado/listado.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent ,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
