import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { RouterModule, Routes } from '@angular/router';
import { InterfonesComponent } from './interfones/interfones.component';
import { AuthGuard } from 'src/app/auth.guard';


const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_INTERFONES,
      component: InterfonesComponent,
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

export class InterfonesRoutingModule { }
