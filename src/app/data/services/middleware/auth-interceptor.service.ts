import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { LoadingService } from '../api/loadingHttp.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private route: Router, private loadingService: LoadingService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // ? INICIAR LOADING DE CARGA
    this.loadingService.show();

    var token = localStorage.getItem('token');
    var auth;
    if (token !== null) {
      auth = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    } else {
      auth = req;
    }

    return next.handle(auth).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          // ? OCULTAR LOADING DE CARGA
          this.loadingService.hide();

          //SE EJECUTA CUANDO LA API RESPONDE CON LOS DATOS CORRESPONDIENTES
          //O SIMPLEMENTE CUANDO NO OCURRIO ALGUN ERRROR

          /**
           * ! SI SE OBTIENE UN ESTATUS 201 QUIERE DECIR QUE SE CREO ALGO EN EL SERVIDOR
           * ! PERO NO RETORNA NADA PARA EL FRONT END SOLO
           * ! EL MESSAGE DE LO QUE SE PROCESO EN EL SERVER
           */

          /**
           * ! SI SE OBTIENE UN ESTATUS 200 QUIERE DECIR QUE SE CRE ALGO EN EL SERVER Y RESPONDE CON
           * ! INFORMACION PARA EL FRONT END.
           * ? PERO LA INFORMACION QUE DEVUELVE SE MENAJA DE MANERA INDEPENDIENTE
           * ? DONDE SE REALIZO LA PETICION
           */

          if (event.status == 201 || event.status == 200) {
            //VERIFICAR SI ATRIBUTO TITLE VIENE VACIO
            //O SI EL BODY ES DE TIPO BLOB(CONTIENE ARCHIVOS QUE ENVIO EL SERVIDOR) ,
            //NO MUESTRO LA ALERT AL USUARIO
            if (event.body.title != '' && !(event.body instanceof Blob)) {
              Swal.fire({
                //title: event.body.icon,
                icon: event.body.icon,
                text: event.body.title,
              });
            }
          }

          //this.loadingService.hide();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // ? OCULTAR LOADING DE CARGA
        this.loadingService.hide();

        //SE EJCUTA CUANDO LA PETICION ES RETORNADA CON UN ESTADO DE ERROR

        /**
         * ! SI SE OBTIEN UN ESTATUS 401 QUIERE DECIR QUE EL USUARIO NO ESTA
         * ! AUTORIZADO PARA DICHA PETICION
         */

        if (error.status == 401) {
          // TODO: VERIFICAR SI LA SESION HA EXPIRADO
          if (error.error.status == '999') {
            // ? STATUS 999 ,INDICA SESION EXPIRADA
            this.iniciarSesion();
          } else {
            // ! OTRO ERROR RELACIONADO CON AUTENTICACION DE USUARIO
            Swal.fire({
              //title: error.error.icon,
              icon: error.error.icon,
              text: error.error.title,
            });

            localStorage.clear();
            this.route.navigate(['/auth/login']);
          }
        }

        /**
         * ! SI SE OBTIENE UN ESTATUS 422 ES POR QUE ALGUNO DE LOS INPUTS
         * ! DE UN FORM NO PASO LA VALIDACION
         */

        if (error.status == 422) {
          if (error.error.icon == 'error' && error.error.title == 'error') {
          let errorMessage = '';
          for (const [key, value] of Object.entries(error.error.body)) {
            errorMessage += `
                            <span style='color:red;font-size:25px;'>*</span> ${value} <br>
                            `;
          }

          Swal.fire({
            icon: error.error.icon,
            //title: error.error.icon,
            html: errorMessage,
          });
        }else{
          Swal.fire({
            icon: error.error.icon,
            //title: error.error.icon,
            text: error.error.title,
          });
        }
        }

        /**
         * ! SE SE OBTIENE UN ESTATUS 500 QUIERE DECIR QUE OCURRIO UN ERROR INTERNO EN EL SERVIDOR
         * ! QUE NO SE TENIA CONTEMPLADO
         */

        if (error.status == 500) {
          //VERIFICAR SI EL MENSAJE DE ERROR
          //NO FUE RETORNADO POR LA API
          if (error.error.message) {
            Swal.fire({
              icon: 'info',
              //title: 'info',
              text: error.error.message,
            });
          }

          //MENSAJE DE ERROR FUE RETORNADO POR LA API
          let errorMessage = '';
          for (const [key, value] of Object.entries(error.error.body)) {
            errorMessage += `
                            <span style='color:red;font-size:25px;'>*</span> ${value} <br>
                            `;
          }

          Swal.fire({
            icon: error.error.icon,
            title: error.error.title,
            text: error.error.title,
            html: errorMessage,
          });
        }
        //this.notificationErrorService.sendError(error);
        return throwError(error);
      })
    );
  }

  /**
   * ! FUNCION ENCARGADA DE PEDIRLE AL USUARIO
   * ! QUE INICIE SESION DE NUEVO POR QUE SU SESION YA
   * ! HA EXPIRADO
   */
  iniciarSesion() {
    const API = environment.api;

    Swal.fire({
      showCancelButton: false,
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonText: 'Iniciar sesion',
      showLoaderOnConfirm: true,
      showDenyButton: false,
      showLoaderOnDeny: true,
      confirmButtonColor: 'var(--ColorSecundario)',
      cancelButtonText: 'Cancelar',
      html: `
      <style>
        .contenedor-check{
          display: flex;
          width:90%;
          flex-direction: row;
          gap:var(--Padding);
          justify-content:center;
          align-items: center;
          margin:auto;
        }
        
        .contenedor-check label {
          margin-top:calc(var(--Margin) / 2.5);
          font-size:calc(var(--SizeTitulo) - 3px);
        }
        .title {
          margin:calc(var(--Margin) * 2.5) 0 calc(var(--Margin) * 2.5) calc(var(--Margin) + 12px);
          font-weight:500;
          width:90%;
          text-align: justify;
          font-size:calc(var(--SizeTitulo) - 3px);
          color:#5f6368;
        }
        .descripcion {
          font-weight:400;
          width:90%;
          text-align: justify;
          font-size:calc(var(--SizeTitulo) - 3px);
          margin-left:calc(var(--Margin) + 12px);
          margin-bottom:calc(var(--Margin) * 2);
          color:#5f6368;
        }

        #claveAntigua ,#claveNueva ,#confirmaClave{
          width:90%;
          margin:auto;
          margin-bottom:calc(var(--Margin) * 2);
          font-size:calc(var(--SizeTitulo) - 1px);
        }
        span{
          display:flex;
          font-size:calc(var(--SizeTitulo) - 3px);
          color:#5f6368;
          font-weight:400;
          width:90%;
          margin:auto;
          margin-bottom:5px;
        }
        .form-check-input{
          width: 17px;
          height: 17px;
        }
      
     

      </style>
      <p class="title">Su sesion ha expirado ,por favor inicie sesion de nuevo</p>
      <span>Correo</span>
      <input type="email" id="claveAntigua" class="swal2-input" placeholder="Ingrese correo" >
      <span>Contraseña</span>
      <input type="password" id="claveNueva" class="swal2-input" placeholder="Ingrese contraseña">
       <div class="form-check contenedor-check">
        <input class="form-check-input" type="checkbox" id="showAndHidePassword" name="option1" value="something">
        <label class="form-check-label" >Mostrar contraseña</label>
      </div>
      `,
      focusConfirm: false,
      preConfirm: () => {
        //let data = {'claveAntigua':encriptClaveAntigua,'claveNueva':encriptClaveNueva ,'token':this.globals.getToken(),'user':this.globals.getId()}
        let data = { correo: cAntigua.value, password: cNueva.value };

        return fetch(`${API}usuario/iniciar-sesion`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'post',
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((mensaje) => {
            console.log(mensaje);
            if (mensaje.icon == 'error') {
              let errorMessage = '';
              for (const [key, value] of Object.entries(mensaje.body)) {
                errorMessage += `
                        ${value} <br>
                              `;
              }
              Swal.showValidationMessage(`${errorMessage}`);
            } else {
              Swal.fire({
                icon: mensaje.icon,
                title: 'Sesion iniciada',
                timer: 1500,
              });

              //ALMACENO INFORMACION IMPORTANTE PARA EL FRONT END
              localStorage.setItem('token', mensaje.body.token);
              localStorage.setItem('rol', mensaje.body.rol);
              localStorage.setItem(
                'id_fraccionamiento',
                mensaje.body.id_fraccionamiento
              );
              localStorage.setItem(
                'nombre_fraccionamiento',
                mensaje.body.nombre_fraccionamiento
              );
              localStorage.setItem(
                'codigo_postal_fraccionamiento',
                mensaje.body.codigo_postal_fraccionamiento
              );
              localStorage.setItem('correo',mensaje.body.correo)
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
    });

    const cAntigua = document.getElementById(
      'claveAntigua'
    ) as HTMLInputElement;
    const cNueva = document.getElementById('claveNueva') as HTMLInputElement;

    //EVENTO CLICK DE INPUT CHECK
    let showAndHidePassword = document.getElementById(
      'showAndHidePassword'
    ) as HTMLInputElement;

    showAndHidePassword.addEventListener('click', (e) => {
      if (showAndHidePassword.checked) {
        cNueva.type = 'text';
      } else {
        cNueva.type = 'password';
      }
    });
  }
}
