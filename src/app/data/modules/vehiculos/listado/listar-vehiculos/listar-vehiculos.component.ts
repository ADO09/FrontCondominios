import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/data/interfaces/Vehiculo';
import { VehiculosService } from 'src/app/data/services/api/vehiculos/vehiculos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent { 

  vehiculos:Vehiculo[] = [] 

  constructor(private apiService:VehiculosService ,private router:Router ,
    private sharedTitleService:SharedTitleComponentService) {
      sharedTitleService.emitChange("Lista de vehículos")

      //OBTENER TODOS LO VEHICULOS
      this.getVehiculos(String(localStorage.getItem("id_fraccionamiento")))
     }

     getVehiculos(id_fraccionamiento:string){
       //alert(id_fraccionamiento)
       this.apiService.getVehiculos(id_fraccionamiento).subscribe((vehiculos:any)=>{
         this.vehiculos = vehiculos.body
       })
     }

}
