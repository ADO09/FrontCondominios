import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { InicioInquilinoComponent } from './inicio-inquilino/inicio-inquilino.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_INICIO_INQUILINO,
      component:InicioInquilinoComponent,
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
export class InquilinoRoutingModule { }
