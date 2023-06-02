import { Component } from '@angular/core';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { animacionSearch } from '../../../../shared/exports/animacionInputSearch';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  proveedores:any[]=[]
  proveedoresTemp:any[]=[]


  constructor(private apiService:ProveedoresService ,private sharedTitleComponent:SharedTitleComponentService){
    sharedTitleComponent.emitChange('Lista de proveedores')
  }

  async ngOnInit() {
    let data = (await this.apiService.getAll().toPromise()) as any
    this.proveedores = data.body
    this.proveedoresTemp =data.body
  }

  animacionSearch(){
    animacionSearch.animacionSearch() 
  }

  searchVehiculo(search:any ,event:any){
    const matchingPropiedades = this.proveedoresTemp.filter((u:any) => 
    u.nombre.toLowerCase().includes(search.toLowerCase()) || 
    u.rfc.toLowerCase().includes(search.toLowerCase()));
  //console.log(matchingUsers);

  this.proveedores = matchingPropiedades
  }

  cerrarAnimacioneSearch(){
    animacionSearch.cerrarAnimacioneSearch()
  }

}
