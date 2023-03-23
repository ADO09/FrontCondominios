import { Component } from '@angular/core';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  proveedores:any[]=[]


  constructor(private apiService:ProveedoresService ,private sharedTitleComponent:SharedTitleComponentService){
    sharedTitleComponent.emitChange('Lista de proveedores')
  }

  async ngOnInit() {
    let data = (await this.apiService.getAll().toPromise()) as any
    this.proveedores = data.body
  }

}
