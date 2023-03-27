import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterfonesComponent } from './interfones/interfones.component';
import { InterfonesRoutingModule } from './interfones-routing.module';




@NgModule({
  declarations: [
    InterfonesComponent
  ],
  imports: [
   
    CommonModule,
    SharedModule,
    InterfonesRoutingModule
    
  ]
})
export class InterfonesModule { }
