import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { INTERNAL_ROUTES } from "../../constants/routes/internal.routes";
import { ListadoComponent } from "./listado/listado.component";
import { RegistroComponent } from "./registro/registro.component";

const routes:Routes = [
    {
        path:INTERNAL_ROUTES.MODULO_LISTADO_PROVEEDORES,
        component:ListadoComponent,
      //  canActivate: [NoAuthGuard]
    },
    {
        path:INTERNAL_ROUTES.MODULO_REGISTRO_PROVEEDORES,
        component:RegistroComponent,
      //  canActivate: [NoAuthGuard]
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProveedoresRoutingModule{}