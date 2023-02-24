import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/data/services/usuarios/usuarios.service';

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
      contacto: '6871203122',
      propiedad: 'Casa N°6'
    },
    {
      id: 2,
      nombre: 'Roberto',
      contacto: '668956325',
      propiedad: 'Casa N°7'
    }
];
  
  showModal:boolean = false;

  usuarioModal = {
    id: '',
    nombre: '',
    contacto: '',
    propiedad: ''
  }



  form: any;
  constructor( private usuariosService: UsuariosService,  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuariosService.$modal.subscribe((valor) =>{this.showModal = valor});
    this.form = this.formBuilder.group({
      id: '',
      nombre: '',
      contacto: '',
      propiedad: ''
    });
  }

  abrirModal(id: any, nombre: any, contacto: any, propiedad: any): void{
    this.form = this.formBuilder.group({
      id: id,
      nombre: nombre,
      contacto: contacto,
      propiedad: propiedad
    });
  }

  enviarModal(): void{
    
  }

}
