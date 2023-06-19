import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
import { AuthGuard } from 'src/app/auth.guard';
import { PagPrincGrafComponent } from './pag-princ-graf/pag-princ-graf.component';


const routes:Routes = [
  {
      path:INTERNAL_ROUTES.MODULO_PAGPRINCIPALGRAF,
      component: PagPrincGrafComponent,
      canActivate:[AuthGuard],data:{ requiredRoles: ['ADMIN FRACCIONAMIENTO']}

    
  },

]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ModPaginaPrincilapRouting { }
