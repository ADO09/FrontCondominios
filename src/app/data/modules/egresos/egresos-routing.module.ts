import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { EgresosComponent } from './egresos/egresos.component';
const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_EGRESOS,
      component:EgresosComponent,
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

export class EgresosRoutingModule { }
