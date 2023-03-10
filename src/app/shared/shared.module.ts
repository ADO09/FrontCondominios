import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { ListRecibosInquilinoComponent } from './components/list/list-recibos-inquilino/list-recibos-inquilino.component';
import { ModalListRecibosComponent } from './components/modals/modal-list-recibos/modal-list-recibos.component';
import { NgxPaginationModule } from 'ngx-pagination';







@NgModule({
  declarations: [...fromComponents.components, ListRecibosInquilinoComponent, ModalListRecibosComponent],
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
  ]
})
export class SharedModule { }
