import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HistorialBalancesRoutingModule } from "./historial-balances-routing.module";
import { HistorialBalancesComponent } from "./historial-balances/historial-balances.component";

@NgModule({
    declarations: [
        HistorialBalancesComponent
    ],
    imports: [
     
      CommonModule,
      SharedModule,
      HistorialBalancesRoutingModule
      
    ]
  })
  export class HistorialBalancesModule { }