import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_PATHS } from 'src/app/data/constants/routes/internal.routes';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { GestionPropietariosComponent } from './gestion-propietarios/gestion-propietarios.component';
import { RegPropietariosComponent } from './reg-propietarios/reg-propietarios.component';
import { AuthGuard } from 'src/app/auth.guard';



const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_REG_PROPIETARIO,
        component:RegPropietariosComponent,
        canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

      //  canActivate: [NoAuthGuard]
    },

    {
        path:INTERNAL_ROUTES.MODULO_GESTION_PROPIETARIOS,
        component:GestionPropietariosComponent,
        canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

      //  canActivate: [NoAuthGuard]
    },
    // {
    //     path:INTERNAL_ROUTES.MODULO_REGPROPIEDAD,
    //     component:RegPropiedadComponent,
    //   //  canActivate: [NoAuthGuard]
    // }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PropietariosRoutingModule{}