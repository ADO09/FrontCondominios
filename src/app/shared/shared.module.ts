import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { ListRecibosGeneralesComponent } from './components/list/list-recibos-generales/list-recibos-generales.component';
import { ModalListInquilinosComponent } from './components/modals/modal-list-inquilinos/modal-list-inquilinos.component';







@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    
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
