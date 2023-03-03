import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { API_ROUTES } from 'src/app/data/constants/routes/api.routes';
import { ApiResponsePropietis } from 'src/app/data/interfaces/interfacesG'; 

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

  
  propiedadesGetAll(): Observable<ApiResponsePropietis> {
    console.log('chingasasyagsdiauhds');
    
    const response = { links: {}, meta: {}, data: [] as any[] | null };
    return this.http.get<ApiResponsePropietis>
      (API_ROUTES.PROPIEDADES.GETALLPROPIEDADES,{headers:this.headers,})
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          response.data = r.data;
          response.meta = r.meta;
          response.links = r.links;
          return response;
        }),
        catchError(() => of(response))
      );
  }


}
