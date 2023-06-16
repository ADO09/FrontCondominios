import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_PATHS } from 'src/app/data/constants/routes/internal.routes';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { LoginComponent } from '../auth/login/login.component';
import { AcptContrRegUsrAdmnFraccComponent } from './acpt-contr-reg-usr-admn-fracc/acpt-contr-reg-usr-admn-fracc.component';
import { RegAdminFraccionamientoComponent } from './reg-admin-fraccionamiento/reg-admin-fraccionamiento.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';

const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_REGADMINFRACC,
        component:RegAdminFraccionamientoComponent,
      //  canActivate: [NoAuthGuard]
    },
    {
        path:INTERNAL_ROUTES.MODULO_ACPTCONTRSREGADMINFRACC,
        component:AcptContrRegUsrAdmnFraccComponent,
      //  canActivate: [NoAuthGuard]
    },
    {
      path:INTERNAL_ROUTES.MODULO_RECUPERARPASSWORD,
      component:RecuperarPasswordComponent
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RegsRoutingModule{}