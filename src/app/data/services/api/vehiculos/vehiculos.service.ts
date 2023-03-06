import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { Vehiculo } from 'src/app/data/interfaces/Vehiculo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  baseUrl = environment.api;

  constructor(public http:HttpClient) { }

  $modal = new EventEmitter<any>();
  /**
   * ! METODO PARA OBTENER TODOS LOS VEHICULO POR FRACCIONAMIENTO
   */

   getVehiculos(id_fraccionamiento:string): Observable<Vehiculo[]> { 
    return this.http.get<Vehiculo[]>(this.baseUrl + `vehiculos?id_fraccionamiento=${id_fraccionamiento}`);
  }

  /**
   * ! OBTENER LOS ESTADOS DE MEXICO
   */
  getEstadosMexico(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'vehiculo/estados-de-mexico');

  }

  /**
   * ! OBTENER LOS TIPOS DE VEHICULOS
   */
  getTiposVehiculos(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'vehiculo/tipos-de-vehiculos');
  }

  
  
  /**
   * ! BUSCAR POR CLAVE CATASTRAL
   */
   searchClaveCatastral(clave:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + `propiedades?claveCatastral[eq]=${clave}`);
  }

  /**
   * ! BUS
   */

  addVehiculo(data:any): Observable<any>{
    return this.http.post<any>(this.baseUrl + 'vehiculos' ,data);
  }



}
