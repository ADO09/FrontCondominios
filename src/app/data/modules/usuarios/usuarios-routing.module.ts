import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';

const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_USUARIOS,
        component:CrudUsuariosComponent,
      //  canActivate: [NoAuthGuard]
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RegsRoutingModule{}