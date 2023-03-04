import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(private apiService:UsuariosService ,private route:ActivatedRoute) {
    this.route.queryParams.subscribe((param:Params) => {
      if(param['token'] != null){
       
        this.token =param['token'];

          //ENVIAR PETICION PARA CONFIRMAR VALIDES DE TOKEN
          apiService.verificarToken({token:this.token}).subscribe((mensaje:Mensaje) => {
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
            }
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
        alert("no hay parametro")
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
        console.log(mensaje)
        console.log(mensaje)
        console.log(mensaje.error)


      if(mensaje.icon == "error" && mensaje.title != "error"){
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          text: mensaje.title
        });
      }else if(mensaje.icon == "error" && mensaje.title == "error"){
        let errorMessage = '';
        for (const [key, value] of Object.entries(mensaje.body)) {
          errorMessage += `
         <span style='color:red;font-size:25px;'>*</span> ${value} <br>
          `;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error de validación',
          html: errorMessage
        });

      }else{
        
        Swal.fire({
          icon: "success",
          title: mensaje.icon,
          text: mensaje.title
        });
      }
      })
    }
  }

}
