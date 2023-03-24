import { Component } from '@angular/core';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-cuotas-ingresos-conf',
  templateUrl: './cuotas-ingresos-conf.component.html',
  styleUrls: ['./cuotas-ingresos-conf.component.css']
})
export class CuotasIngresosConfComponent {


  public idFraccionamientoUsuer:any;
 
  constructor(private ingresosService:IngresosService,private sharedTitleService:SharedTitleComponentService) { 

      sharedTitleService.emitChange("Gestion de Configuracion de Pagos")
  }

  public ingresosData!:any[];
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.ingresosService.IngresosPagosConfGetAll(this.idFraccionamientoUsuer).subscribe( (r) => {

      this.ingresosData = r.body;
      console.log(r);
      console.log(this.ingresosData);
      
    });
  }

}
