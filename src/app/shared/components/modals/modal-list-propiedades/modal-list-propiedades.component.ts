import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-list-propiedades',
  templateUrl: './modal-list-propiedades.component.html',
  styleUrls: ['./modal-list-propiedades.component.css']
})
export class ModalListPropiedadesComponent implements OnInit {


  @Input() cerrarModal:any;

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
  constructor(   private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
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
  
 

  // closeModal() {
  //   const modal = document.getElementById('id01');
  // if (modal) {
  //   modal.style.display = 'none';
  // }

  // }
  enviarModal(){

  }

}
