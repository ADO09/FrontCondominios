import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterfonesService {
  baseUrl = environment.api;
  constructor(public http:HttpClient) { }

  getPropiedades(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'propiedades/?fraccionamientoId[eq]='+id);
  }

  putInterfon(id:number, payload:any): Observable<any>{
    console.log();
    return this.http.put<any>(this.baseUrl + 'propiedades/interfon/'+id, payload);
  }

  postInterfon(payload:any): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'propiedades/interfon', payload);
  }
  getInterfon(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'propiedades/?id[eq]='+id);
  }

}
