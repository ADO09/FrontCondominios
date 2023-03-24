import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { EgresosComponent } from './egresos/egresos.component';
import { GestionEgresosComponent } from './gestion-egresos/gestion-egresos.component';
import { RegEgresoComponent } from './reg-egreso/reg-egreso.component';
const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_EGRESOS,
      component:EgresosComponent,
    //  canActivate: [NoAuthGuard]
  },
  {
    path:INTERNAL_ROUTES.MODULO_GESTIONEGRESO + ':id_egreso',
    component:GestionEgresosComponent,
  //  canActivate: [NoAuthGuard]
},

{
  path:INTERNAL_ROUTES.MODULO_REGEGRESO ,
  component:RegEgresoComponent,
//  canActivate: [NoAuthGuard]
},

]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class EgresosRoutingModule { }
