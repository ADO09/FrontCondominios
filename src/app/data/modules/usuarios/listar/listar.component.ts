import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  usuarios:any[]=[]
  constructor(private apiService:UsuariosService ,private router:Router, private sharedTitleService:SharedTitleComponentService){
    this.getUsuarios(String(localStorage.getItem('id_fraccionamiento')))
    sharedTitleService.emitChange("Lista de usuarios")
  }

  getUsuarios(idFraccionamiento:string){
    this.apiService.getAll(idFraccionamiento).subscribe((usuarios:any)=>{
      console.log(usuarios.body)
      this.usuarios = usuarios.body
    })
  }

}
