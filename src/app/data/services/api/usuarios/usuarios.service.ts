import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { API_ROUTES } from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl = environment.api;

  constructor(public http:HttpClient) { }

  $modal = new EventEmitter<any>();
  /**
   * ! METODO PARA ENVIAR CORREO CON LINK PARA CONFIRMAR REGISTRO
   */

   confirmarRegistro(usuario:any): Observable<Mensaje> { 
    return this.http.post<Mensaje>(this.baseUrl + 'usuario/confirmar-registro' ,usuario);
  }

  /**
   * ! VERIFICAR TOKEN QUE SE LE ENVIO POR CORREO DE CONFIRMACION DE REGISTRO
   */
  verificarToken(data:{token:string}): Observable<Mensaje>{
    return this.http.post<Mensaje>(this.baseUrl + 'usuario/confirmar-registro/check-token' ,data);

  }

  /**
   * ! REGISTRAR CUENTA DE USUARIO
   */
  registro(data:{password:string,token:string}): Observable<Mensaje>{
    return this.http.post<Mensaje>(this.baseUrl + 'usuario/registro',data);
  }
  
  /**
   * ! INICIO DE SESION DE USUARIO
   */
  inicioSesion(data:{password:string,correo:string}): Observable<Mensaje>{
    return this.http.post<Mensaje>(this.baseUrl + 'usuario/iniciar-sesion',data);
  }

  /**
   * ! OBTENER TODOS LOS USUARIOS POR ID FRACCIONAMIENTO
   */
  getAll(idFraccionamiento:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}usuarios?id_fraccionamiento[eq]=${idFraccionamiento}`)
  }

  /**
   * ! OBTENER TODOS LOS ROLES QUE SE LE PUEDE ASOCIAR A UN USUARIO
   */
  getRoles():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}usuario/roles?descripcion[ne]=ADMIN GENERAL`)
  }



  AddUser(data:any): Observable<Mensaje> {

    console.log(API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS);

    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.USUARIOS.ADDUSERCONFIRMUSER,data)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          // response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }


}
