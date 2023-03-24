import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
