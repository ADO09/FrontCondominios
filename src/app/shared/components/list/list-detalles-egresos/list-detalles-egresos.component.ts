import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-detalles-egresos',
  templateUrl: './list-detalles-egresos.component.html',
  styleUrls: ['./list-detalles-egresos.component.css']
})
export class ListDetallesEgresosComponent {
  
  @Input() dataDetallesEgreso!: any[];
  public currentDetalleEgreso!:any;

  abrirModal(data:any){
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);

    this.currentDetalleEgreso = data;
  }

  envModal() {
    var divModl = document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
  }
}
