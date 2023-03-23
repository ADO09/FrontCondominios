import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProveedoresService {
    baseUrl = environment.api;

    constructor(public http:HttpClient) { }


    // ? OBTENER TODOS LOS PROVEEDORES POR FRACCIONAMIENTO

    getAll():Observable<any>{
        return this.http.get<any>(`${this.baseUrl}proveedores?fraccionamientoId[eq]=${localStorage.getItem('id_fraccionamiento')}`)
    }

}