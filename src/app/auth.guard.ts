import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    const requiredRoles: string[] = next.data['requiredRoles']; // Obtiene la lista de roles requeridos de los datos de la ruta

    // Comprueba si el usuario tiene un rol válido almacenado en localStorage
    const userRole = localStorage.getItem('rol');
    if (userRole && requiredRoles.includes(userRole)) {
      return true; // Permite el acceso a la ruta protegida si el usuario tiene al menos uno de los roles requeridos
    } else {
      // Redirecciona a la página de inicio de sesión si el usuario no tiene el rol adecuado
      return this.router.parseUrl('/auth/login');
    }
  }
  }
  

