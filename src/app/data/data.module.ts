import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUsuariosComponent } from './modules/usuarios/crud-usuarios/crud-usuarios.component';
import { PropiedadesServicesComponent } from './services/api/propiedades-services/propiedades-services.component';




@NgModule({
  declarations: [
  
   
  
    PropiedadesServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataModule { }
