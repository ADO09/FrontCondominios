import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { API_ROUTES } from 'src/app/data/constants/routes/api.routes';
import { ApiResponsePropietis } from 'src/app/data/interfaces/interfacesG'; 
import { Mensaje } from 'src/app/data/interfaces/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesServiceService {

  constructor(
    protected http: HttpClient,
    //private authService:ApiService,
    private router:Router
  ) { }

  private headers = new HttpHeaders({'Accept': 'application/json'});
  // propiedadesGetAll() {
  //   return this.http
  //     .get(API_ROUTES.PROPIEDADES.GETALLPROPIEDADES,{headers:this.headers,} )
  //     .pipe(map(res => {
  //       console.log(res);
  //       return res;
  //     }));
      
  // }

  
    propiedadesGetAll(): Observable<Mensaje> {
    console.log('chingasasyagsdiauhds');
    
    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.PROPIEDADES.GETALLPROPIEDADES)
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
