import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { API_ROUTES } from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  baseUrl = environment.api;
  constructor(public http:HttpClient) { }


  GetProductosQPFraccionamiento(idFraccionamiento:any): Observable<Mensaje> {
    
    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (this.baseUrl + 'productos?fraccionamientoId[eq]=' + idFraccionamiento)
      .pipe(
        delay(100),
        map(r => {
          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }


  updateProducto( id:any, data:any): Observable<Mensaje> {

    const response = { icon: '', title: '' };
    return this.http.put<Mensaje>
      (API_ROUTES.PRODUCTO.UPDATEPRODUCTO + id ,data) //aqui 
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


  AddProducto( data:any): Observable<Mensaje> {

    const response = { icon: '', title: '' };
    return this.http.post<Mensaje>
      (API_ROUTES.PRODUCTO.ADDPRODUCTO,data) //aqui 
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



  getAllFilters(){
    
  }

}
