import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegsRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    CrudUsuariosComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegsRoutingModule
  ]
})
export class UsuariosModule { }
