import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { TarjetasRfdiComponent } from './tarjetas-rfdi/tarjetas-rfdi.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_TARJETAS_RFDI,
      component:TarjetasRfdiComponent,
      canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

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
export class TarjetasRoutingModule { }
