import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { INTERNAL_ROUTES } from "../../constants/routes/internal.routes";
import { EditarComponent } from "./editar/editar.component";
import { ListadoComponent } from "./listado/listado.component";
import { RegistroComponent } from "./registro/registro.component";
import { AuthGuard } from "src/app/auth.guard";

const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_LISTADO_PROVEEDORES,
        component:ListadoComponent,
        canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

      //  canActivate: [NoAuthGuard]
    },
    {
        path:INTERNAL_ROUTES.MODULO_REGISTRO_PROVEEDORES,
        component:RegistroComponent,
        canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

      //  canActivate: [NoAuthGuard]
    }
    ,
    {
      path:INTERNAL_ROUTES.MODULO_EDITAR_PROVEEDORES,
      component:EditarComponent,
      canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProveedoresRoutingModule{}