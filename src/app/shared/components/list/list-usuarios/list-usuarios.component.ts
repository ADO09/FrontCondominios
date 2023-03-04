import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {

  @Input() usuarios!:any[];

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
