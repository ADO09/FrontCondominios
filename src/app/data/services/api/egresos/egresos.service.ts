import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { API_ROUTES, queryparams } from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  baseUrl = environment.api;
  constructor(public http:HttpClient) { }

  getEgresos(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'egresos/?fraccionamientoId[eq]='+id+'&incluirDetalles=true');
  }


  getOneEgreso(id:any){
    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.EGRESOS.GETONEEGRESOS + id  +'?incluirDetalles=true')
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


  postEgreso(data:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.EGRESOS.ADDEGRESOPOST,data)
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


  PutTipoEgreso(id:any,data:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    return this.http.put<Mensaje>
      (API_ROUTES.EGRESOS.PUTTIPOEGRESO + id,data)
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


  DelDetalleEgreso(idEgrs:any,idDetll:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    return this.http.delete<Mensaje>
      (API_ROUTES.EGRESOS.DELDETALLEEGRESO+ idEgrs + '/' + idDetll)
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
  postDetalleEgreso(data:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.EGRESOS.ADDDETALLEEGRESOPOST,data)
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



  postTipoEgreso(data:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.EGRESOS.POSTTIPOEGRESO,data)
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

  getTipoEgresoQPFraccionamiento(id:any){

    console.log((API_ROUTES.EGRESOS.GETTIPOEGRESO +'?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+id));
    
    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.EGRESOS.GETTIPOEGRESO +'?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+id)
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


  
  updateDetalleEgreso( idEgrs:any,idDetll:any, data:any): Observable<Mensaje> {

    console.log(API_ROUTES.EGRESOS.UPDATEDETALLEEGRS + idEgrs + '/' + idDetll);
    
    const response = { icon: '', title: '' };
    return this.http.patch<Mensaje>
      (API_ROUTES.EGRESOS.UPDATEDETALLEEGRS + idEgrs + '/' + idDetll,data) //aqui 
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

  updateEgreso( id:any, data:any): Observable<Mensaje> {

    const response = { icon: '', title: '' };
    return this.http.post<Mensaje>
      (API_ROUTES.EGRESOS.UPDATEEGRESO + id + queryparams.QUERY.QUERYPATCH,data) //aqui 
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


  cambiarEstatus(idFraccionamiento:any, idEgreso:any, payload:any[]){
    return this.http.put<any>(this.baseUrl + 'egresos/?fraccionamientoId[eq]='+idFraccionamiento+'&id[eq]='+idEgreso,payload);
  }
}
