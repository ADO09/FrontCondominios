import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, tap, throwError } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
  })
  export class AuthInterceptorService implements HttpInterceptor {
    constructor(private route:Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
            return next.handle(req).pipe(
                tap(event => {
                    if (event.type === HttpEventType.Response) {
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
                        
                        if(event.status == 201 || event.status == 200){
                            Swal.fire({
                                title: event.body.icon,
                                icon: event.body.icon,
                                text: event.body.title
                              });
                        }

                        //this.loadingService.hide();
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    //SE EJCUTA CUANDO LA PETICION ES RETORNADA CON UN ESTADO DE ERROR 

                    /**
                     * ! SI SE OBTIEN UN ESTATUS 401 QUIERE DECIR QUE EL USUARIO NO ESTA
                     * ! AUTORIZADO PARA DICHA PETICION
                     */

                    if(error.status == 401){
                        Swal.fire({
                            title:error.error.icon ,
                            icon:error.error.icon
                            ,text:error.error.title
                        })

                        this.route.navigate(['/auth/login'])
                    }  
                    
                    /**
                     * ! SI SE OBTIENE UN ESTATUS 422 ES POR QUE ALGUNO DE LOS INPUTS
                     * ! DE UN FORM NO PASO LA VALIDACION
                     */

                    if(error.status == 422){
                        let errorMessage = '';
                        for (const [key, value] of Object.entries(error.error.body)) {
                            errorMessage += `
                            <span style='color:red;font-size:25px;'>*</span> ${value} <br>
                            `;
                        }

                        Swal.fire({
                            icon: error.error.icon,
                            title: error.error.icon,
                            html: errorMessage
                        });



                    }

                    /**
                     * ! SE SE OBTIENE UN ESTATUS 500 QUIERE DECIR QUE OCURRIO UN ERROR INTERNO EN EL SERVIDOR 
                     * ! QUE NO SE TENIA CONTEMPLADO
                     */

                    if(error.status == 500){

                        //VERIFICAR SI EL MENSAJE DE ERROR
                        //NO FUE RETORNADO POR LA API
                        if(error.error.message){
                            Swal.fire({
                                icon: "info",
                                title: "info",
                                text:error.error.message,
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
                            text:error.error.title,
                            html: errorMessage
                        });
                    }
                     //this.notificationErrorService.sendError(error);
                     return throwError(error);
                })
              );
    }
      
  }