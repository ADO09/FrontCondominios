import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  proveedorFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    rfc: new FormControl('', [Validators.required]),
    correoContacto: new FormControl('', [Validators.required]),
    nombreContacto: new FormControl('', [Validators.required]),
    notas: new FormControl(''),
    metodoDePagoId: new FormControl('', [Validators.required]),

  });

  constructor(private sharedTitleComponent:SharedTitleComponentService ,
    private apiService:ProveedoresService ,
    private route:Router){
    sharedTitleComponent.emitChange('Registrar proveedor')
  }

  addProveedor(){
    let data:any = {
      ...this.proveedorFormRegistro.value ,
      fraccionamientoId:localStorage.getItem('id_fraccionamiento')
    }

    
    this.apiService.registro(data).subscribe((data:any)=>{
      this.proveedorFormRegistro.reset()
      this.route.navigate(['/dashboard/proveedores/listado'])
    })
    
    
  }

}
