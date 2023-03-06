import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/data/services/api/vehiculos/vehiculos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  claveCatastral!:string
  estados:any[]= []
  tiposvehiculo:any[]=[]
 

 constructor(private apiService:VehiculosService ,private router:Router ,
    private sharedTitleService:SharedTitleComponentService){

      sharedTitleService.emitChange("Registrar vehículo")

     
  }
idPropietario:string | undefined
idPropiedad:string | undefined
 async ngOnInit(){
     //OBTENER ESATODOS DE MEXICO
     var data = await this.apiService.getEstadosMexico().toPromise() as any
    this.estados = data.body
    
     //OBTENER LOS TIPOS DE VEHICULOS
    var data = this.tiposvehiculo = await this.apiService.getTiposVehiculos().toPromise() as any
    this.tiposvehiculo = data.body
  
              
  }

  vehiculoFormRegistro = new FormGroup({
    id_tipo_vehiculo: new FormControl('', [Validators.required]),
    id_estado: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    placas: new FormControl('', [Validators.required]),
  });


  searchPropiedad(clave:string){

    this.apiService.searchClaveCatastral(clave).subscribe((data:any) =>{
      if(data.body == ""){
        this.idPropiedad = undefined
        this.idPropietario = undefined
        Swal.fire({
          title:"Propiedad no encontrada",
          icon:"error"
        })
      }else{
       
        this.idPropiedad = String(data.body[0].id)
        this.idPropietario = String(data.body[0].propietario.id)


        Swal.fire({
          icon:"info",
          html:
          `
          
          <h3>Propiedad:</h3>
          <h5>${data.body[0].descripcion}</h5>
          
          
          <h3 >Propietario:</h3>
          <h5>${data.body[0].propietario.nombre}</h5>
         
          `
        })

      }
    })
  }

  addVehiculo(){
    console.log(this.vehiculoFormRegistro.value)
    if(this.idPropiedad){
      const datos = {
        ...this.vehiculoFormRegistro.value,
        id_propiedad: this.idPropiedad,
        propietario_id:this.idPropietario ,
        tarjeta_circulacion:null ,
        id_fraccionamiento:localStorage.getItem('id_fraccionamiento')
        };

 
        this.apiService.addVehiculo(datos).subscribe((data:any) =>{
          this.vehiculoFormRegistro.reset()
        })
    
       
    }else{
      Swal.fire({
        title:"Buque su propiedad",
        icon:"info"
      })
    }
    // Agregar el atributo 'edad'
     
   
  }

}
