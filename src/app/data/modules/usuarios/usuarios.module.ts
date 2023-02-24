import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegsRoutingModule } from './usuarios-routing.module';
import { ModalUsuariosComponent } from './modal-usuarios/modal-usuarios.component';



@NgModule({
  declarations: [
    CrudUsuariosComponent,
    ModalUsuariosComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegsRoutingModule
  ]
})
export class UsuariosModule { }
