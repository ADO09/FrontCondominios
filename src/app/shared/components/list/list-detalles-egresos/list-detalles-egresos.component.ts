import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import Swal from 'sweetalert2';

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
  constructor(private routerA:ActivatedRoute,private egresoService:EgresosService,private sharedTitleService:SharedTitleComponentService){
    this.id = +this.routerA.snapshot.params['id_egreso'];
    sharedTitleService.emitChange("Gestion de Egresos")
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

  eliminarDetalleEgreso(detalleEgreso: any) {
    console.log('Se pulsó X:', detalleEgreso);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
   

        this.egresoService.DelDetalleEgreso(this.id,detalleEgreso.producto.id).subscribe((r)=>{
          console.log(r);
          
        })
      }
    })

  
    // Agrega aquí la lógica para eliminar el detalle de egreso seleccionado
  }
  
  
}
