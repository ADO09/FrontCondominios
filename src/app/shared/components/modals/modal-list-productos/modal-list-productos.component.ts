import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-list-productos',
  templateUrl: './modal-list-productos.component.html',
  styleUrls: ['./modal-list-productos.component.css']
})
export class ModalListProductosComponent {
  @Input() ProductoData!: any[];
  @Input() cerrarModal: any;
  @Output() productoSeleccionado = new EventEmitter<any>();
  p: number = 1;
  items = Array(150).fill(0).map((x, i) => `Item ${i + 1}`);


  selectInquilino(data:any){
   // console.log(data);
    // const datoString = JSON.stringify(data);
 this.productoSeleccionado.emit(data);
    this.cerrarModal();
  }
}
