import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_PATHS } from 'src/app/data/constants/routes/internal.routes';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { LoginComponent } from '../auth/login/login.component';
import { RegAdminFraccionamientoComponent } from './reg-admin-fraccionamiento/reg-admin-fraccionamiento.component';

const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_REGADMINFRACC,
        component:RegAdminFraccionamientoComponent,
      //  canActivate: [NoAuthGuard]
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RegsRoutingModule{}