import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagPrincGrafComponent } from './pag-princ-graf/pag-princ-graf.component';
import { ModPaginaPrincilapRouting } from './modPagPrinc.routing.module';


@NgModule({
  declarations: [
    PagPrincGrafComponent 
  ],
  imports: [
    CommonModule
  ]
})
export class ModPagPrincModule { }
