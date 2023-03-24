import { Component } from '@angular/core';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  recibospago:any[]=[]
  propiedad:any
  showModal:Boolean = false
  constructor(private apiService:ProveedoresService ,
    private sharedTitlecomponent:SharedTitleComponentService ,
    private apiServicePropedad:PropiedadesServiceService){
      this.sharedTitlecomponent.emitChange('Listado de recibos de pago')
    this.apiService.getRecibosPagos().subscribe((data:any)=>{
      this.recibospago = data.body
    })
  }

  masInformacion(idPropiedad:any){
    this.apiServicePropedad.retrivePropiedad(idPropiedad).subscribe((data:any)=>{
      this.propiedad = data.body
      console.log(this.propiedad)
      this.showModal = true
    })
  }


}
