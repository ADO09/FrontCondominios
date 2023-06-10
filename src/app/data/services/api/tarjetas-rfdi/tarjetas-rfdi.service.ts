import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { API_ROUTES, queryparams } from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarjetasRfdiService {

  baseUrl = environment.api;
  constructor(public http:HttpClient) { }

  getTarjetas(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'propiedades/rfdi/?fraccionamientoId[eq]='+id);
  }

  getPropiedades(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'propiedades/?fraccionamientoId[eq]='+id);
  }

  putRFDI(id:any, payload:any): Observable<any>{
    return this.http.put<any>(this.baseUrl + 'propiedades/rfdi/'+id, payload);
  }

  postRFDI(payload:any): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'propiedades/rfdi', payload);
  }

  getRFDI(rfdi:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'propiedades/rfdi/?rfdi[eq]='+rfdi);
  }


  getAllFiltersTipoRfdi(idFr:any,tipoRfdi:any){
 console.log((API_ROUTES.RFDIS.GETRFDI +'?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+idFr+"&tipo"+queryparams.OPERATORSMAP.EQ+'='+tipoRfdi));
 
    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.RFDIS.GETRFDI +'?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+idFr+"&tipo"+queryparams.OPERATORSMAP.EQ+'='+tipoRfdi)
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
}
