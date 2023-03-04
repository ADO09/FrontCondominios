import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acpt-contr-reg-usr-admn-fracc',
  templateUrl: './acpt-contr-reg-usr-admn-fracc.component.html',
  styleUrls: ['./acpt-contr-reg-usr-admn-fracc.component.scss']
})
export class AcptContrRegUsrAdmnFraccComponent implements OnInit {
  token!: string;
  constructor(private apiService:UsuariosService ,private route:ActivatedRoute ,private router:Router) {
    this.route.queryParams.subscribe((param:Params) => {
      if(param['token'] != null){
       
        this.token =param['token'];

          //ENVIAR PETICION PARA CONFIRMAR VALIDES DE TOKEN
          apiService.verificarToken({token:this.token}).subscribe((mensaje:Mensaje) => {
            /*
            if(mensaje.icon == "error"){
              Swal.fire({
                icon:"error",
                title:"error",
                text:mensaje.title
              })
            }else{
              Swal.fire({
                icon:"success",
                title:"",
                text:mensaje.title
              })
            }*/
          })
          /*
          loginService.confirmarCorreo({token:param['codigo_de_confirmacion']}).subscribe(mensaje => {
            console.log(mensaje)
            if(mensaje.icon == 'success'){
              Swal.fire({
                icon:'success',
                title:mensaje.title
              })
            }else {
              Swal.fire({
                icon:'error',
                title:mensaje.title
              })
            }
          })*/
          //location.href = "#/login"
      }else {
        //location.href = "#/inicio"
        this.router.navigate(['/auth/login'])
      }
    })
   }

  ngOnInit(): void {

  }

  registro(password:string,confirmPassword:string){
   

    //VALIDAR QUE PASSWORD SEAN IGUALES
    if(password != confirmPassword){
      Swal.fire({
        icon:"error",
        title:"error",
        text:"Las contraseñas no coinciden"
      })
    }else{
      //TODO BIEN POR EL MOMEMNTO
      this.apiService.registro({password:password ,token:this.token}).subscribe((mensaje:any) =>{
          this.router.navigate(['/auth/login'])
      })
    }
  }

}
