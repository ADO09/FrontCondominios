import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_PATHS } from 'src/app/data/constants/routes/internal.routes';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { LoginComponent } from '../auth/login/login.component';
import { CuotasIngresosConfComponent } from './cuotas-ingresos-conf/cuotas-ingresos-conf.component';



const routes:Routes = [



    {
        path:INTERNAL_ROUTES.MODULO_CUOTAS,
        component:CuotasIngresosConfComponent,
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

export class IngresosRoutingModule{}