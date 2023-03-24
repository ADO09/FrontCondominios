import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { ListRecibosInquilinoComponent } from './components/list/list-recibos-inquilino/list-recibos-inquilino.component';
import { ModalListRecibosComponent } from './components/modals/modal-list-recibos/modal-list-recibos.component';
 import { NgxPaginationModule } from 'ngx-pagination';
import { ModalGestionDetalleEgresosComponent } from './components/modals/modal-gestion-detalle-egresos/modal-gestion-detalle-egresos.component';
import { ModalListProductosComponent } from './components/modals/modal-list-productos/modal-list-productos.component';







@NgModule({
  declarations: [...fromComponents.components, ModalGestionDetalleEgresosComponent, ModalListProductosComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
     NgxPaginationModule
    
  ],
  exports:[
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule ,
   
    ...fromComponents.components
  ],
  providers: [DatePipe],
})
export class SharedModule { }
