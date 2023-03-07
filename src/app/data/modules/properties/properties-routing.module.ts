import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_PATHS } from 'src/app/data/constants/routes/internal.routes';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { LoginComponent } from '../auth/login/login.component';
import { PropiedadeComponent } from './propiedade/propiedade.component';
import { RegPropiedadComponent } from './reg-propiedad/reg-propiedad.component';


const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_PROPPRINC,
        component:PropiedadeComponent,
      //  canActivate: [NoAuthGuard]
    },
    {
        path:INTERNAL_ROUTES.MODULO_REGPROPIEDAD,
        component:RegPropiedadComponent,
      //  canActivate: [NoAuthGuard]
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PropertiesRoutingModule{}