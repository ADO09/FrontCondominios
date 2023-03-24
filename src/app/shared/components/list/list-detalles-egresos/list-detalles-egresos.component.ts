import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';

@Component({
  selector: 'app-list-detalles-egresos',
  templateUrl: './list-detalles-egresos.component.html',
  styleUrls: ['./list-detalles-egresos.component.css']
})
export class ListDetallesEgresosComponent {
  
  @Input() dataDetallesEgreso!: any[];
  public currentDetalleEgreso!:any;
  public id:any;
  public routeDetalleRg:any = INTERNAL_ROUTES.MODULO_REGEDETALLEEGRESO;
  constructor(private routerA:ActivatedRoute){
    this.id = +this.routerA.snapshot.params['id_egreso'];

  }
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

  aplastarX() {
    console.log("Se aplastó la X");
  }
}
