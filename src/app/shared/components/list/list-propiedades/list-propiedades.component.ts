import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-propiedades',
  templateUrl: './list-propiedades.component.html',
  styleUrls: ['./list-propiedades.component.css']
})
export class ListPropiedadesComponent implements OnInit {
 
//   usuarios = [
//     {
//       id: 1,
//       nombre: 'Sebastian',
//       contacto: '6871203122',
//       propiedad: 'Casa N°6'
//     },
//     {
//       id: 2,
//       nombre: 'Roberto',
//       contacto: '668956325',
//       propiedad: 'Casa N°7'
//     }
// ];
  
  // showModal:boolean = false;

  // usuarioModal = {
  //   id: '',
  //   nombre: '',
  //   contacto: '',
  //   propiedad: ''
  // }


  @Input()propiedades:any;
  form: any;
  constructor(   private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    // this.form = this.formBuilder.group({
    //   id: '',
    //   nombre: '',
    //   contacto: '',
    //   propiedad: ''
    // });
  }

   abrirModal(datos: any): any {
    const objeto = {
      tipoPropiedadId: datos.tipoPropiedadId,
      claveCatastral: datos.claveCatastral,
      descripcion: datos.descripcion,
      superficie: datos.superficie,
      balance: datos.balance,
      estatusId: datos.estatusId,
      razonDeRechazo: datos.razonDeRechazo,
      propietarioId: datos.propietarioId,
      inquilinoId: datos.inquilinoId, 
      fraccionamientoId: datos.fraccionamientoId
    };
  
    console.log(objeto);
    
    var divModl =  document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'block';
  }

  // abrirModal(id?: any, nombre?: any, contacto?: any, propiedad?: any): void{
  //   // this.form = this.formBuilder.group({
  //   //   id: id,
  //   //   nombre: nombre,
  //   //   contacto: contacto,
  //   //   propiedad: propiedad
  //   // });
   

  // }
 

  closeModal() {
    const modal = document.getElementById('id01');
  if (modal) {
    modal.style.display = 'none';
  }
  }
  enviarModal(){

  }

  envModal(){
    
   var divModl =  document.getElementById('id01') as HTMLDivElement;
   divModl.style.display = 'none';

  }

}
