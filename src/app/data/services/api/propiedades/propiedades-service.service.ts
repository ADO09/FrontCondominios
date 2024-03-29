import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { API_ROUTES,queryparams } from 'src/app/data/constants/routes/api.routes';
import { ApiResponsePropietis } from 'src/app/data/interfaces/interfacesG'; 
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesServiceService {
  baseUrl = environment.api;

  constructor(
    protected http: HttpClient,
    //private authService:ApiService,
    private router:Router
  ) { }

  // private headers = new HttpHeaders({'Accept': 'application/json'});
  // propiedadesGetAll() {
  //   return this.http
  //     .get(API_ROUTES.PROPIEDADES.GETALLPROPIEDADES,{headers:this.headers,} )
  //     .pipe(map(res => {
  //       console.log(res);
  //       return res;
  //     }));
      
  // }

  
    propiedadesGetAll(): Observable<Mensaje> {

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

//?isInquilino[eq]=1

  propiedadesGetFiltroFraccionamiento(id:any): Observable<Mensaje> {

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http.get<Mensaje>
      (API_ROUTES.PROPIEDADES.GETALLPROPIEDADES + '?fraccionamientoId'+queryparams.OPERATORSMAP.EQ+'='+id)
      .pipe(
        delay(100),
        map(r => {
          // console.log(r);
          
          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  postPropiedad(data:any): Observable<Mensaje> {
    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.PROPIEDADES.POSTPROPIEDADES,data)
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


  propiedadesUpdate( id:any, data:any): Observable<Mensaje> {

    // console.log('ID_____:' + id);
    // console.log(API_ROUTES.PROPIEDADES.UPDATEPROPIEDADID + id +queryparams.QUERY.QUERYPUT,data);
    // console.log(data);
    console.log(API_ROUTES.PROPIEDADES.UPDATEPROPIEDADID + id + queryparams.QUERY.QUERYPUT);
    
    const response = { icon: '', title: '' };
    return this.http.post<Mensaje>
      (API_ROUTES.PROPIEDADES.UPDATEPROPIEDADID + id + queryparams.QUERY.QUERYPUT,data) //aqui 
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


   
  PATCHPropiedad(id:any,data:any): Observable<Mensaje> {

    const response = { icon: '', title: ''};
    return this.http.post<Mensaje>
      (API_ROUTES.PROPIEDADES.PATCHPROPIEDADID+id+queryparams.QUERY.QUERYPATCH,data)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          //response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }


  retrivePropiedad(id:any): Observable<Mensaje> {

    
    const response = { icon: '', title: '', body: {} as any | null };
    return this.http.get<Mensaje>
      (API_ROUTES.PROPIEDADES.RETRIVEPROPIEDAD+id)
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




  ElmInquilinoNull(id:any): Observable<Mensaje> {

    const response = { icon: '', title: ''};
    return this.http.delete<Mensaje>
      (API_ROUTES.INQUILINOS.ELMINQUILINOPROPIEDAD+id)
      .pipe(
        delay(100),
        map(r => {
          console.log(r);
          
          //response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

    /**
   * ! METODO ENCARGADO DE OBTEER PROPIEDADES DE MANERA FILTRADA Y DINAMICA
   */
    getPropiedesFilters(idTipoPropiedad:any):Observable<Mensaje>{
      return this.http.get<Mensaje>(`${this.baseUrl}propiedades?tipoPropiedadId[eq]=${idTipoPropiedad}&id_fraccionamiento=${localStorage.getItem('id_fraccionamiento')}`)
    }
  

}
