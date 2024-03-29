import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { EgresosComponent } from './egresos/egresos.component';
import { GestionEgresosComponent } from './gestion-egresos/gestion-egresos.component';
import { RegEgresoComponent } from './reg-egreso/reg-egreso.component';
import { RegDetalleEgresoComponent } from './reg-detalle-egreso/reg-detalle-egreso.component';
import { ProductosComponent } from './productos/productos.component';
import { AuthGuard } from 'src/app/auth.guard';
const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_EGRESOS,
      component:EgresosComponent,
      canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

    //  canActivate: [NoAuthGuard]
  },
  {
    path:INTERNAL_ROUTES.MODULO_GESTIONEGRESO + ':id_egreso',
    component:GestionEgresosComponent,
    canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

  //  canActivate: [NoAuthGuard]
},

{
  path:INTERNAL_ROUTES.MODULO_REGEGRESO ,
  component:RegEgresoComponent,
  canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

//  canActivate: [NoAuthGuard]
},
{
  path:INTERNAL_ROUTES.MODULO_REGEDETALLEEGRESO + ':id_egreso',
  component:RegDetalleEgresoComponent,
  canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

//  canActivate: [NoAuthGuard]
},
{
  path:INTERNAL_ROUTES.MODULO_PRODUCTOS ,
  component:ProductosComponent,
  canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

//  canActivate: [NoAuthGuard]
},

]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class EgresosRoutingModule { }
