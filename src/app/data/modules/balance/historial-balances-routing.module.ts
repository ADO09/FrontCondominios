import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { HistorialBalancesComponent } from './historial-balances/historial-balances.component';


const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_HISTORIAL_BALANCES,
      component: HistorialBalancesComponent,
    //  canActivate: [NoAuthGuard]
  },
  // {
  //     path:INTERNAL_ROUTES.MODULO_ACPTCONTRSREGADMINFRACC,
  //     component:AcptContrRegUsrAdmnFraccComponent,
  //   //  canActivate: [NoAuthGuard]
  // }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class HistorialBalancesRoutingModule { }
