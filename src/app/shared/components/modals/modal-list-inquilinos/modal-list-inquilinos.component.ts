import { Component, EventEmitter, Input, Output } from '@angular/core';
import { propiedad } from 'src/app/data/interfaces/propiedad';
import { propietarios } from 'src/app/data/interfaces/propietariosI';

@Component({
  selector: 'app-modal-list-inquilinos',
  templateUrl: './modal-list-inquilinos.component.html',
  styleUrls: ['./modal-list-inquilinos.component.css']
})
export class ModalListInquilinosComponent {

  @Input() propietariosData!: propietarios[];
  @Input() cerrarModal: any;
  @Output() inquilinoSeleccionado = new EventEmitter<any>();


  selectInquilino(data:any){
   // console.log(data);
    // const datoString = JSON.stringify(data);
 this.inquilinoSeleccionado.emit(data);
  }
}
