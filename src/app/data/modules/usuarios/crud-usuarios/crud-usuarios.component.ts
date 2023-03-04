import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css']
})
export class CrudUsuariosComponent implements OnInit {
  usuarios = [
    {
      id: 1,
      nombre: 'Sebastian',
      apellido: 'Vega',
      correo: 'sebas@gmail.com',
      propiedad: 'Casa N°3'
    },
    {
      id: 2,
      nombre: 'Roberto',
      apellido: 'Hijar',
      correo: 'boberto@gmail.com',
      propiedad: 'Casa N°7'
    }
];
  
  showModal:boolean = false;

  usuarioModal = {
    id: '',
    nombre: '',
    apellido:'',
    correo: '',
    propiedad: ''
  }



  form: any;
  constructor( private usuariosService: UsuariosService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuariosService.$modal.subscribe((valor) =>{this.showModal = valor});
    this.form = this.formBuilder.group({
      id: '',
      nombre: '',
      apellido:'',
      correo: '',
      propiedad: ''
    });
  }

  abrirModal(id: any, nombre: any, apellido:any, correo: any, propiedad: any): void{
    this.form = this.formBuilder.group({
      id: id,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      propiedad: propiedad
    });
  }

  enviarModal(): void{

  }

}
