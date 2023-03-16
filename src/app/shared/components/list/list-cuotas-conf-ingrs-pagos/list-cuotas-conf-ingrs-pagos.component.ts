import { Component, Input } from '@angular/core';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { confPagos } from 'src/app/data/interfaces/confPagos';
import { propiedad } from 'src/app/data/interfaces/propiedad';

@Component({
  selector: 'app-list-cuotas-conf-ingrs-pagos',
  templateUrl: './list-cuotas-conf-ingrs-pagos.component.html',
  styleUrls: ['./list-cuotas-conf-ingrs-pagos.component.css']
})
export class ListCuotasConfIngrsPagosComponent {


  @Input() ingresosConfPagos!: confPagos[];
  currentConfPago!: confPagos;
public regConfPagoRoute:any;
  constructor(){
    this.regConfPagoRoute =  INTERNAL_ROUTES.MODULO_REGCONFPAGO;
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
this.currentConfPago = datos;
    console.log(this.currentConfPago);
    
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
