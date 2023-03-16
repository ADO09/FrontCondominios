import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  baseUrl = environment.api;
  constructor(public http:HttpClient) { }

  getEgresos(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'egresos/?fraccionamientoId[eq]='+id);
  }
}
