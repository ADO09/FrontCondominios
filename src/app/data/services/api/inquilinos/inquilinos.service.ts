import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class InquilinosService {
  baseUrl = environment.api;
  constructor(public http:HttpClient) { }


  getTodosRecibos(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'recibos/?fraccionamientoId[eq]='+id);
  }

  postRecibo(payload: any): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'generarRecibos/', payload);
  }

  getRecibo(id:any){
    return this.http.get<any>(this.baseUrl + 'recibos/?propiedad_id[eq]='+id);
  }

  getReciboUnico(id:any){
    return this.http.get<any>(this.baseUrl + 'recibos/?id[eq]='+id);
  }


  getConfigPagos(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'configurar-pagos/?fraccionamientoId[eq]='+id);
  }
  GetPropietariosQPFraccionamientoQPIsinquilino(idFraccionamiento:any, isInquilino:any): Observable<Mensaje> {
    
    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (this.baseUrl + 'propietarios/?isInquilino[eq]='+isInquilino+'&fraccionamientoId[eq]='+idFraccionamiento)
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

  propiedadesGetFiltroFraccionamiento(id:any): Observable<Mensaje> {

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (this.baseUrl + 'propiedades/?fraccionamientoId[eq]='+id)
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
}
