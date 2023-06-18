import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/data/interfaces/Mensaje';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-admin-fraccionamiento',
  templateUrl: './reg-admin-fraccionamiento.component.html',
  styleUrls: ['./reg-admin-fraccionamiento.component.scss']
})
export class RegAdminFraccionamientoComponent implements OnInit {

  showModal = false

  codigosPostales: any[] = [];
  codigosPostalesTemp: any[] = [];

  usuarioForm = new FormGroup({
    nombre: new FormControl('') ,
    apellidos: new FormControl('' ) ,
    correo: new FormControl('') ,
    rol:new FormControl('ADMIN FRACCIONAMIENTO'),
    
    nombre_fraccionamiento: new FormControl('') ,
    codigo_postal: new FormControl('')
  });
  constructor(private apiService:UsuariosService,private router:Router) { }

  ngOnInit(): void {
    this.apiService.getCodigosPostales().subscribe(codigosPostales => {
      this.codigosPostales = codigosPostales.body
      this.codigosPostalesTemp = codigosPostales.body
    })
  }

  addUsuario(){     
    this.apiService.confirmarRegistro(this.usuarioForm.value).subscribe((r) => {
      this.usuarioForm.reset();

      console.log(r);
      
      if (r.icon == "info") {

        setTimeout(() => {
          this.router.navigateByUrl('/auth/login');
        }, 300);
        

      }
      
    })
  }

  searchPropiedad(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    
    const matchingPropiedades = this.codigosPostalesTemp.filter(u => 
      u.d_codigo.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.codigosPostales = matchingPropiedades
  }

  // ? SELECCIONAR PRIPIEDAD DE MODAL 
  selectPropiedad(codigoPostal:any){
    this.usuarioForm.get("codigo_postal")?.setValue(codigoPostal.d_codigo)
    this.showModal = false
  }


}
