import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialBalanceService {
  baseUrl = environment.api;
  constructor(public http:HttpClient) { }

  getBalances(id:any): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'balances/historial/?fraccionamientoId[eq]='+id);
  }
}
