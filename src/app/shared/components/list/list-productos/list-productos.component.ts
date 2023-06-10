import { Component, Input } from '@angular/core';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent {

  @Input() productosData!:any[];



 
  currentProducto!: any;
public regProducto:any;
  constructor(){
    // this.regProducto =  INTERNAL_ROUTES.MODULO_REGCONFPAGO;
  }
  abrirModal(datos: any): any {
    //console.log('antes de');
    //console.log(datos);

    // this.currentPropiedad = {
    //   id: datos.id,
    //   tipoPropiedad: datos.tipoPropiedad,
    //   claveCatastral: datos.claveCatastral,
    //   descripcion: datos.descripcion,
    //   superficie: datos.superficie,
    //   balance: datos.balance,
    //   predialUrl: datos.predialUrl,
    //   estatus: datos.estatus,
    //   propietario: datos.propietario,
    //   inquilino: datos.inquilino,
    //   fraccionamientoId: datos.fraccionamientoId,
    // };
this.currentProducto = datos;
    console.log(this.currentProducto);
    
    // console.log(this.currentPropiedad.inquilino );
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);
  }


 

  envModal(){
    
    var divModl =  document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
 
   }


  
}
