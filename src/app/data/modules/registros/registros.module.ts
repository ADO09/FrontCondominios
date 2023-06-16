import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegAdminFraccionamientoComponent } from './reg-admin-fraccionamiento/reg-admin-fraccionamiento.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegsRoutingModule } from './negistros-routing.module';
import { AcptContrRegUsrAdmnFraccComponent } from './acpt-contr-reg-usr-admn-fracc/acpt-contr-reg-usr-admn-fracc.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';



@NgModule({
  declarations: [
    RegAdminFraccionamientoComponent,
    AcptContrRegUsrAdmnFraccComponent,
    RecuperarPasswordComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegsRoutingModule
  ]
})
export class RegistrosModule { }
