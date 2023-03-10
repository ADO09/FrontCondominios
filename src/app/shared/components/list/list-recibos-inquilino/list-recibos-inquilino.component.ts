import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { recibo } from 'src/app/data/interfaces/recibo';
import { Recibos } from 'src/app/data/models/recibos.model';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';


@Component({
  selector: 'app-list-recibos-inquilino',
  templateUrl: './list-recibos-inquilino.component.html',
  styleUrls: ['./list-recibos-inquilino.component.css']
})
export class ListRecibosInquilinoComponent implements OnInit {
  listaRecibos: Recibos[] = [];
  tipoUsuario:any;
  fraccionamientoId:any;
  page!:number;
  public formRecibo!: FormGroup;

  constructor(private apiService:InquilinosService, private fb: FormBuilder,) {
  }  
  ngOnInit(): void {
    this.fraccionamientoId = localStorage.getItem('fraccionamientoId');
      //AQUI VA EL SERVICIO QUE TRAE TODOS LOS RECIBOS
      //ESTO CUANDO EL ROL SEA DE ADMIN
      this.apiService.getTodosRecibos().subscribe((recibos:any)=>{
        this.listaRecibos = recibos.body;
        console.log(this.listaRecibos);
      });
      this.formRecibo = this.fb.group({
        Id_Fraccionamiento: ['', Validators.required],
        Id_Propietario: ['', Validators.required],
        Id_Inquilino: ['', Validators.required],
        Fecha_Pago: ['', Validators.required],
        Monto: ['', Validators.required],
        Fecha_Vencimiento: ['', Validators.required],
        Monto_Penalizacion: [''],
        Monto_Descuento:['',Validators.required],
        Estatus: ['', Validators.required],
      });
  }
  

  editarRecibo(id: number): any {
    console.log(this.listaRecibos[id]);
    //aqui solo se carga la informacion del renglon seleccionado en el modal
    this.formRecibo = this.fb.group({
      Id_Fraccionamiento:this.listaRecibos[id].fraccionamientoId,
      Id_Propietario: this.listaRecibos[id].propiedad.propietario.id,
      Id_Inquilino: this.listaRecibos[id].propiedad.propietario.id,// aqui deberia ser la id del inquilino
      Fecha_Pago: this.listaRecibos[id].fechaPago === null ? this.listaRecibos[id].fechaVencimiento : this.listaRecibos[id].fechaPago, // se pone una fecha en predeterminado
      Monto: this.listaRecibos[id].monto,
      Fecha_Vencimiento: this.listaRecibos[id].fechaVencimiento,
      Monto_Penalizacion: this.listaRecibos[id].montoPenalizacion === null ? 0 : this.listaRecibos[id].montoPenalizacion ,
      Monto_Descuento:this.listaRecibos[id].montoDescuento === null ? 0 : this.listaRecibos[id].montoDescuento,
      Estatus: this.listaRecibos[id].estatus,
    });
  }
  actualizar(){

  //aqui va el servicio que manda el put hacia el back ya con el objeto listo
    const payload = {
      Id_Fraccionamiento: this.formRecibo.get("Id_Fraccionamiento")?.value,
      Id_Propietario: this.formRecibo.get('Id_Propietario')?.value,
      Id_Inquilino: this.formRecibo.get('Id_Inquilino')?.value,
      Fecha_Pago: this.formRecibo.get('Fecha_Pago')?.value, // se pone una fecha en predeterminado
      Monto:this.formRecibo.get('Monto')?.value,
      Fecha_Vencimiento: this.formRecibo.get('Fecha_Vencimiento')?.value,
      Monto_Penalizacion:this.formRecibo.get('Monto_Penalizacion')?.value,
      Monto_Descuento:this.formRecibo.get('Monto_Descuento')?.value,
      Estatus: this.formRecibo.get('Estatus')?.value,
    }
    console.log(payload);
  }

}
