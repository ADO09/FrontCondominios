import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-admin-fraccionamiento',
  templateUrl: './reg-admin-fraccionamiento.component.html',
  styleUrls: ['./reg-admin-fraccionamiento.component.scss']
})
export class RegAdminFraccionamientoComponent implements OnInit {

  usuarioForm = new FormGroup({
    nombre: new FormControl('') ,
    apellidos: new FormControl('' ) ,
    correo: new FormControl('') ,
    
    nombre_fraccionamiento: new FormControl('') ,
    codigo_postal: new FormControl('')
  });
  constructor(private apiService:UsuariosService) { }

  ngOnInit(): void {
  }

  addUsuario(){    
    this.apiService.confirmarRegistro(this.usuarioForm.value).subscribe(() => {
      this.usuarioForm.reset();
    })
  }


}
