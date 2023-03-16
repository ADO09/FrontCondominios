import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioInquilinoComponent } from './inicio-inquilino/inicio-inquilino.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InquilinoRoutingModule } from './inquilino-routing.module';




@NgModule({
  declarations: [
    InicioInquilinoComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    InquilinoRoutingModule
  ]
})
export class InquilinoModule { }
