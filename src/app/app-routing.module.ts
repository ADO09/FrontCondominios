import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './data/modules/auth/login/login.component';
import { DashboardComponent } from './data/layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('src/app/data/modules/auth/auth.module').then((m)=>m.AuthModule)
  // },

  {
    path:"auth",
    loadChildren:()=>
    import('src/app/data/modules/auth/auth.module').then((m) =>m.AuthModule)
  },

  {
    path:"registros",
    loadChildren:()=>
    import('src/app/data/modules/registros/registros.module').then((m) =>m.RegistrosModule)
  },


  //---------------------------------------------------------------
  //{path:'' ,redirectTo:'/dashboard' ,pathMatch:'full'},
 // {path:'dashboard' ,component:DashboardComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:"",
        loadChildren:()=>
        import('src/app/data/modules/usuarios/usuarios.module').then((m) =>m.UsuariosModule)
      },
      {
        path:"",
        loadChildren:()=>
        import('src/app/data/modules/properties/properties.module').then((m) =>m.PropertiesModule)
      },
      {
        path:"",
        loadChildren:()=>
        import('src/app/data/modules/ingresos/ingresos.module').then((m) =>m.IngresosModule)
      },
      {
        path:"",
        loadChildren:()=>
        import('src/app/data/modules/vehiculos/vehiculos.module').then((m) =>m.VehiculosModule)
      },
      {
        path:"",
        loadChildren:()=>
        import('src/app/data/modules/inicio/inquilino/properties.module').then((m) =>m.InquilinoModule)
      },
      {
        path:"",
        loadChildren:()=>
        import('src/app/data/modules/propietarios/propietarios.module').then((m) =>m.PropietariosModule)
      },
      // {
      //   // path: 'userauth',
      //   // loadChildren: () =>
      //   //   import('@modules/user/user.module').then((m) => m.UserModule)
      // },
      // {
      //   path: 'dashboard',
      //   // redirectTo: 'dashboard',
      //   pathMatch: 'full'
      // },
    

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
