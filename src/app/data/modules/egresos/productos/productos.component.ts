import { Component } from '@angular/core';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public idFraccionamientoUsuer:any;
 
  constructor(private egresosService:EgresosService,private productosService:ProductosService,private sharedTitleService:SharedTitleComponentService) { 

      sharedTitleService.emitChange("Gestion productos")
  }

  public productosData!:any[];
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.productosService.GetProductosQPFraccionamiento(this.idFraccionamientoUsuer).subscribe( (r) => {

      this.productosData = r.body;
      console.log(r);
      console.log(this.productosData);
      
    });
  }
}
