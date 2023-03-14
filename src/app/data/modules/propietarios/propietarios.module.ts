import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegPropietariosComponent } from './reg-propietarios/reg-propietarios.component';
import { PropietariosRoutingModule } from './propietarios-routing.module';
import { GestionPropietariosComponent } from './gestion-propietarios/gestion-propietarios.component';



@NgModule({
  declarations: [
    RegPropietariosComponent,
    GestionPropietariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PropietariosRoutingModule
  ]
})
export class PropietariosModule { }
