import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuarioFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
  });

  roles:any[]=[]

  constructor(private apiService:UsuariosService ,private router:Router, private sharedTitleService:SharedTitleComponentService){
    //this.getUsuarios(String(localStorage.getItem('id_fraccionamiento')))
    sharedTitleService.emitChange("Registrar usuario")
    this.getRoles()

  }

  getRoles(){
    this.apiService.getRoles().subscribe((roles:any) =>{
      this.roles = roles.body
    })
  }

  addUsuario(){
    let data:any = {
      ...this.usuarioFormRegistro.value ,
      nombre_fraccionamiento:localStorage.getItem('nombre_fraccionamiento') ,
      codigo_postal:localStorage.getItem('codigo_postal_fraccionamiento') ,}
    console.log(data.rol)

    //! VERIFICAMO QUE SI EL ROL SELECCIONADO ES DE TIPO PROPIETARIO O INQUILINO ,
    //? VERIFICAR QUE ALLA UN REGISTRO EN PROPIEDAD Y PROPIETARIO


      // TODO: ROLES DIFERENTES 

      //! REGISTRAR USUARIO
      this.apiService.confirmarRegistro(data).subscribe(()=>{
        this.usuarioFormRegistro.reset()
        this.router.navigate(['/dashboard/usuarios/listado'])
      })
  }


  

}
