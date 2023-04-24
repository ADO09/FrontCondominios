import { Component, EventEmitter, Input, Output } from '@angular/core';
import { propietarios } from 'src/app/data/interfaces/propietariosI';

@Component({
  selector: 'app-modal-list-propietarios',
  templateUrl: './modal-list-propietarios.component.html',
  styleUrls: ['./modal-list-propietarios.component.css']
})
export class ModalListPropietariosComponent {
  @Input() propietariosData!: propietarios[];
  @Input() cerrarModal: any;
  propietarioTemp:any[]=[]
  public propietarios:any[]=[]
  @Output() inquilinoSeleccionado = new EventEmitter<any>();
  p: number = 1;
  items = Array(150).fill(0).map((x, i) => `Item ${i + 1}`);


  selectpropietarios(data:any){
   // console.log(data);
    // const datoString = JSON.stringify(data);
 this.inquilinoSeleccionado.emit(data);
    this.cerrarModal();
  }


  searchPropietario(search:any ,event:any){

    this.propietarios = this.propietariosData;
    event.stopPropagation();
    console.log('iaushdiuahsdiuashiudhasiudhaiu');
    
    console.log(this.propietarios);
    
    //event.stopPropagation();
    //console.log(search)
    const matchingPropietario = this.propietarioTemp.filter(u => 
      u.nombre.toLowerCase().includes(search.toLowerCase()) || 
      u.id.toLowerCase().includes(search.toLowerCase()) || 
      u.correo.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.propietarios = matchingPropietario
  }


 
}
