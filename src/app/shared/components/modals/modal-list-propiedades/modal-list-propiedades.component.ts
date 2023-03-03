import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  
  // showModal:boolean = false;

  // usuarioModal = {
  //   id: '',
  //   nombre: '',
  //   contacto: '',
  //   propiedad: ''
  // }



  public formPropiedades!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formPropiedades = this.fb.group({
      tipoPropiedadId: ['', Validators.required],
      claveCatastral: ['', Validators.required],
      descripcion: ['', Validators.required],
      superficie: ['', Validators.required],
      balance: ['', Validators.required],
      estatusId: ['', Validators.required],
      razonDeRechazo: [''],
      inquilinoId:['',Validators.required],
      propietarioId: ['', Validators.required],
      fraccionamientoId: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formPropiedades.value);
  }

  abrirModal(id: any, nombre: any, contacto: any, propiedad: any): void{
    // this.form = this.formBuilder.group({
    //   id: id,
    //   nombre: nombre,
    //   contacto: contacto,
    //   propiedad: propiedad
    // });
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
