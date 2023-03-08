import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { NoAuthGuard } from '@core/guards/no-auth.guard';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { EditarComponent } from './editar/editar.component';
import { ListarVehiculosComponent } from './listado/listar-vehiculos/listar-vehiculos.component';
import { RegistroComponent } from './registro/registro.component';


const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_LISTADO_VEHICULOS,
        component:ListarVehiculosComponent,
      //  canActivate: [NoAuthGuard]
    },{
        path:INTERNAL_ROUTES.MODULO_REGISTRO_VEHICULOS,
        component:RegistroComponent,
      //  canActivate: [NoAuthGuard]
    }
    ,{
      path:INTERNAL_ROUTES.MODULO_EDITAR_VEHICULOS,
      component:EditarComponent,
    //  canActivate: [NoAuthGuard]
  }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class VehiculosRoutingModule{}