import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, catchError, of } from 'rxjs';
import { API_ROUTES } from 'src/app/data/constants/routes/api.routes';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class PropietariosService {

  constructor(protected http: HttpClient,
    //private authService:ApiService,
    private router:Router) { }



    propietariosGetInquilinos(): Observable<Mensaje> {

      const response = { icon: '', title: '', body: [] as any[] | null };
      return this.http.get<Mensaje>
        (API_ROUTES.PROPIETARIOS.GETALLPROPIETARIOS)
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
