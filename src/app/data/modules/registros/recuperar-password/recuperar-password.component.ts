import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {

  existeToken:boolean = false
  token:string | undefined
  userData:any


  constructor(private route:ActivatedRoute ,private router:Router,private usuarioService:UsuariosService){
    this.route.queryParams.subscribe((param:Params) => {
      this.token = param['token']
      if(this.token != null){
        this.existeToken = true

        //VALIDAR QUE TOKEN NO ALLA ESPIRADO Y LE PERTENESCA A UNH USUARIO
        let data = {token:param['token']}
        this.usuarioService.verificarTokenForgotPassword(data).subscribe(mensaje=>{

          if(mensaje.icon == 'success'){

            this.userData = mensaje.body
          }else if(mensaje.icon == 'info'){
          this.router.navigate(['/registros/registro/recuperarPassword'])

          }
        }, error => {
          this.router.navigate(['/auth/login'])
        })
        /*
        this.loginService.verificarToken(data).subscribe(mensaje => {
          if(mensaje.icon == 'success'){
           
            this.userData = mensaje.body
          }else if(mensaje.icon == 'info'){
           
            
            location.href = '#/login/recuperar_password'
            location.reload()
          }
          else {
           
          
            location.href = '#/inicio'
          }
         
        }, error => {
          location.href = '#/inicio'
        })*/
      }
      
  })
  }

  buscarUsuario(inputValue:string ,inputName:string ,event:any){
    if(inputValue == ''){
      Swal.fire({
        icon: "error",
        title: 'Escribir dirección email',
      })
    }else {
      var data;
      
        
          //BUSCAR POR CORREO
          data = {correo:inputValue}
          
        this.usuarioService.recuperarPassword(data).subscribe(mensaje => {
          //active BTN
          if(mensaje.icon == 'success'){
          this.router.navigate(['/auth/login'])

          }
          
        })
  }
}


  actualizarPassword(password:string ,repitePassword:string ,event:any):void{
    if(password == "" && repitePassword == ""){
      Swal.fire({
        icon:'error',
        title:"No pueden quedar campos vacios",
        timer:3000 ,
        timerProgressBar:true
      })
    }else {
      //VERIFICAR QUE PASSWORD SEA MAYOR A 7 CARACTERES
      if(password.length < 8){
        Swal.fire({
          icon:'error',
          title:"Contraseña tiene que ser mayor a 7 caracteres",
          timer:3000 ,
          timerProgressBar:true
        })
      }else {
        //VERIFICAR QUE CONTRASEÑAS COINCIDAN
        if(password != repitePassword){
          Swal.fire({
            icon:'error',
            title:"La contraseña no coincide ,verifiquer porfavor",
            timer:3000 ,
            timerProgressBar:true
          })
        }else {  
          //disable button hasta que el servidor responda
          this.usuarioService.updatePasswordUser({idUser:this.userData['0'].id,password:password}).subscribe(mensaje=>{
            this.router.navigate(['/auth/login'])
          })
        }
      }
    }
  }

}
