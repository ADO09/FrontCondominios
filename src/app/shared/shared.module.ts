import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { ModalListPropiedadesComponent } from './components/modals/modal-list-propiedades/modal-list-propiedades.component';
import { MatDialog } from '@angular/material/dialog';




@NgModule({
  declarations: [...fromComponents.components, ModalListPropiedadesComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatDialog
  ],
  exports:[
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule ,
    MatDialog,
    ...fromComponents.components
  ]
})
export class SharedModule { }
