import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:UsuariosService ,private route:Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(password:string,correo:string){
    this.apiService.inicioSesion({password:password,correo:correo}).subscribe((mensaje:Mensaje)=>{
      //ALMACENO TOKEN DE AUTENTICACION DE USUARIO Y SU ROL O ROLES QUE TIENE
      //PARA EL SISTEMA
      localStorage.setItem('token', mensaje.body.token);
      localStorage.setItem('rol', mensaje.body.rol);

      //REDIRECCIONAR AL DACHBOARD
      this.route.navigate(['/dashboard'])
      

      
    })
  }

 

}
