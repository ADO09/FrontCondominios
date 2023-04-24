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
  propietarioTemp:any[]=[]
  public propietarios:any[]=[]
  p: number = 1;
  items = Array(150).fill(0).map((x, i) => `Item ${i + 1}`);

  selectInquilino(data:any){
   // console.log(data);
    // const datoString = JSON.stringify(data);
 this.inquilinoSeleccionado.emit(data);
    this.cerrarModal();
  }


  searchPropietario(search:any ,event:any){

    this.propietarios = this.propietariosData;
    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingPropietario = this.propietarioTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.propietarios = matchingPropietario
  }
}
