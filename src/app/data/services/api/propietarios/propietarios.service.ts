import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, catchError, of } from 'rxjs';
import {
  API_ROUTES,
  queryparams,
} from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';

@Injectable({
  providedIn: 'root',
})
export class PropietariosService {
  constructor(
    protected http: HttpClient,
    //private authService:ApiService,
    private router: Router
  ) {}

  propietariosGetInquilinos(idFraccionamiento: any): Observable<Mensaje> {
    console.log(API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS);
console.log(idFraccionamiento);

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http
      .get<Mensaje>(
        API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS +
          '?isInquilino' +
          queryparams.OPERATORSMAP.EQ +
          '=1'+
          '&fraccionamientoId' +
          queryparams.OPERATORSMAP.EQ +
          '=' +
          idFraccionamiento
      )
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  propietariosGetPropietarios(idFraccionamiento: any): Observable<Mensaje> {
    console.log(API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS);
    console.log(idFraccionamiento);

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http
      .get<Mensaje>(
        API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS +
          '?isInquilino' +
          queryparams.OPERATORSMAP.EQ +
          '=0'+
          '&fraccionamientoId' +
          queryparams.OPERATORSMAP.EQ +
          '=' +
          idFraccionamiento
      )
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  AddPropietario(data: any): Observable<Mensaje> {
    console.log(API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS);

    const response = { icon: '', title: '' };
    return this.http
      .post<Mensaje>(API_ROUTES.PROPIETARIOS.ADDPROPIETARIO, data)
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          // response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  GetPropietariosQPFraccionamientoQPIsinquilino(
    idFraccionamiento: any
  ): Observable<Mensaje> {
    console.log(
      API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS +
        '?isInquilino' +
        queryparams.OPERATORSMAP.EQ +
        '=0&id_fraccionamiento' +
        queryparams.OPERATORSMAP.EQ +
        '=' +
        idFraccionamiento
    );

    const response = { icon: '', title: '', body: [] as any[] | null };
    return this.http
      .get<Mensaje>(
        API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS +
          '?fraccionamientoId' +
          queryparams.OPERATORSMAP.EQ +
          '=' +
          idFraccionamiento
      )
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  PropietariosPATCHUptdate(id: any, data: any): Observable<Mensaje> {
    // console.log('ID_____:' + id);
    // console.log(API_ROUTES.PROPIEDADES.UPDATEPROPIEDADID + id +queryparams.QUERY.QUERYPUT,data);
    // console.log(data);
    console.log(
      API_ROUTES.PROPIETARIOS.UPDATEPROPIETARIO +
        id +
        queryparams.QUERY.QUERYPATCH
    );

    const response = { icon: '', title: '' };
    return this.http
      .post<Mensaje>(
        API_ROUTES.PROPIETARIOS.UPDATEPROPIETARIO +
          id +
          queryparams.QUERY.QUERYPATCH,
        data
      ) //aqui
      .pipe(
        delay(100),
        map((r) => {
          console.log(r);

          // response.body = r.body;
          response.title = r.title;
          response.icon = r.icon;
          return response;
        }),
        catchError(() => of(response))
      );
  }
}
