
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './listado/listar-vehiculos/listar-vehiculos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { EditarComponent } from './editar/editar.component';





@NgModule({
  declarations: [  
    ListarVehiculosComponent,
    RegistroComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }

