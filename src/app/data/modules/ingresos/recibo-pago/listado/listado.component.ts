import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { VehiculosService } from 'src/app/data/services/api/vehiculos/vehiculos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  recibospago:any[]=[]
  propiedad:any
  showModal:Boolean = false
  urlTarjetaCirculacion!: string;
  constructor(private apiService:ProveedoresService ,
    private sharedTitlecomponent:SharedTitleComponentService ,
    private apiServicePropedad:PropiedadesServiceService ,
    private vehiculosService:VehiculosService ,
    private ingresoService:IngresosService
    ){
      this.sharedTitlecomponent.emitChange('Listado de pagos')
     this.getRecibos()
  }

  getRecibos(){
    this.apiService.getRecibosPagos().subscribe((data:any)=>{
      this.recibospago = data.body
    })
  }

  masInformacion(idPropiedad:any ,idRecibo:any){

    /*
    const getPropiedad =  this.apiServicePropedad.retrivePropiedad(idPropiedad)
    const getRecibo = this.ingresoService.getReciboId(idRecibo)
  
    // ? FORKJOIN SIRVE PARA AGRUPAR PETICIONES ,Y TENER UNA RESPUESTA CON EL RESULTADO DEL
    // ? NUMERO DE PETICIONES QUE SE INDICO
    forkJoin([getPropiedad ,getRecibo]).subscribe(data =>{
      this.propiedad = data[0].body
      console.log(data[1].body)
      this.showModal = true
    })*/

  /* // ! YA NO SE OCUPA EN LA MISMA CONSULTA PARA OBTENER EL PAGO VIENE TODO LO RELACIONADO CON EL 
    this.apiServicePropedad.retrivePropiedad(idPropiedad).subscribe((data:any)=>{
      this.propiedad = data.body
      this.showModal = true
    })*/


  }

  verComprobante(recibo:any){
    
    // ? OBTENER EL COMPROBANTE PARA VISUALIZARLO POSTERIORMENTE
    this.vehiculosService.getFilePrivate(recibo.comprobanteUrl).subscribe(blob=>{
      //console.log(data)
      //CREAR UN OBJETO URL PARA EL ARCHIVO BLOB
      this.urlTarjetaCirculacion  = window.URL.createObjectURL(blob);
      window.open(this.urlTarjetaCirculacion)
    })

  }

  rechazarComprobante(recibo:any){
    Swal.fire({
      title: 'Razon de rechazo',
      input: 'textarea',
      inputPlaceholder: 'Escriba aquí la razon de rechazo...',
      inputAttributes: {
        'aria-label': 'Ingrese su mensaje'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
      allowEscapeKey: false,
      preConfirm: (message) => {
        if (message.trim() === '') {
          Swal.showValidationMessage('Debe ingresar la razon de rechazo');
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        let data = new FormData()

        data.append("estatus","RECHAZADO")
        data.append("razonRechazo",String(result.value))
        this.ingresoService.changeStatusRecibo(data ,recibo.id).subscribe((data) => {
          this.getRecibos()
        })
      }
    });
    
    
    
  }

  aceptarPago(recibo:any){

   let message = (recibo.recibo.estatus != 'PAGADO') ? '¿Está seguro que desea aceptar el pago?' :'Este pago ya esta reflejado en el sistema , ¿Quiere aplicarlo a la proxima fecha?'
    Swal.fire({
      title:message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        let data = new FormData()

        data.append("estatus","FINALIZADO")
        //data.append("razonRechazo",String(result.value))
        this.ingresoService.changeStatusRecibo(data ,recibo.id).subscribe((data) => {
          this.getRecibos()
        })
      }
    });
    
  }


}
