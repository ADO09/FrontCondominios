import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegsRoutingModule } from './usuarios-routing.module';

import { ListarComponent } from './listar/listar.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    CrudUsuariosComponent,
    ListarComponent,
    RegistroComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegsRoutingModule
  ]
})
export class UsuariosModule { }
