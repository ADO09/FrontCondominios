import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { API_ROUTES, queryparams } from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  baseUrl = environment.api;
  constructor(
    protected http: HttpClient,
    //private authService:ApiService,
    private router:Router
  ) { }


   
  IngresosPagosConfGetAll(id:any): Observable<Mensaje> {

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.INGRESOS.GETALLPAGOSCONF+ '?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+id)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

//?isInquilino[eq]=1

  propiedadesGetFiltroFraccionamiento(id:any): Observable<Mensaje> {

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.PROPIEDADES.GETALLPROPIEDADES + '?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+id)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  AddPostConfPago(data:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    console.log(API_ROUTES.INGRESOS.ADDCONFPAGO);
    
    return this.http.post<Mensaje>
      (API_ROUTES.INGRESOS.ADDCONFPAGO,data)
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


  ConfPagoPutUpdate( id:any, data:any): Observable<Mensaje> {

    const response = { icon: '', title: '' };
    return this.http.put<Mensaje>
      (API_ROUTES.INGRESOS.UPDATEPAGOCONF + id ,data) //aqui 
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


   
  PATCHPropiedad(id:any,data:any): Observable<Mensaje> {

    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.PROPIEDADES.PATCHPROPIEDADID+id+queryparams.QUERY.QUERYPATCH,data)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          //response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }


  retrivePropiedad(id:any): Observable<Mensaje> {

    
    const response = { icon: '', title: '', body: {} as any | null };
    return this.http.get<Mensaje>
      (API_ROUTES.PROPIEDADES.RETRIVEPROPIEDAD+id)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }
  
  // ? CAMBIO EL ESTATUS DEL COMPROBANTE DE PAGO, A ACEPTADO O RECHAZADO
  changeStatusRecibo(data:any ,id:any){
    return this.http.post<any>(`${this.baseUrl}pagos/${id}/?_method=PATCH` ,data);
  }

  // ? OBTENER EL RECIBO POR ID 
  getReciboId(id:any){
    return this.http.get<any>(`${this.baseUrl}recibos/${id}`)
  }

  

}
