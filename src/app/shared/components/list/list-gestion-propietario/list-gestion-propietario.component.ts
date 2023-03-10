import { Component, EventEmitter, Input, Output } from '@angular/core';
import { propietarios } from 'src/app/data/interfaces/propietariosI';

@Component({
  selector: 'app-list-gestion-propietario',
  templateUrl: './list-gestion-propietario.component.html',
  styleUrls: ['./list-gestion-propietario.component.css']
})
export class ListGestionPropietarioComponent {
  @Input() propietariosData!: propietarios[];
  @Input() cerrarModal: any;
  //@Output() inquilinoSeleccionado = new EventEmitter<any>();
  p: number = 1;
  items = Array(150).fill(0).map((x, i) => `Item ${i + 1}`);
 public currentPropietario!:propietarios;

  selectInquilino(data:any){
   
    //console.log('antes de');
    //console.log(datos);
this.currentPropietario = data;
   
    
    // console.log(this.currentPropiedad.inquilino );
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);
  }


  


  envModal(){ 
    var divModl =  document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
 
   }
}
