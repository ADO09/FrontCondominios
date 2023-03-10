import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { recibo } from 'src/app/data/interfaces/recibo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquilinosService {
  baseUrl = environment.apiRadmin;
  constructor(public http:HttpClient) { }


  getTodosRecibos(): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'recibos');
  }
}
