import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagPrincGrafComponent } from './pag-princ-graf/pag-princ-graf.component';
import { ModPaginaPrincilapRouting } from './modPagPrinc.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    PagPrincGrafComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModPaginaPrincilapRouting,
    NgxChartsModule
  ]
})
export class ModPagPrincModule { }
