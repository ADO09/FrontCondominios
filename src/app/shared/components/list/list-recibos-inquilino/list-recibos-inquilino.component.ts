import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recibos } from 'src/app/data/models/recibos.model';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';


@Component({
  selector: 'app-list-recibos-inquilino',
  templateUrl: './list-recibos-inquilino.component.html',
  styleUrls: ['./list-recibos-inquilino.component.css']
})
export class ListRecibosInquilinoComponent implements OnInit {
  listaRecibos: Recibos[] = [];
  ReciboIndividual: Recibos[] = [];
  tipoUsuario:any;
  fraccionamientoId:any;
  page!:number;
  public formRecibo!: FormGroup;

  constructor(private apiService:InquilinosService, private fb: FormBuilder,) {
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
  } 
  
  
  actualizarListaMostrada(RecibosFiltrados: Recibos[]){
    this.listaRecibos = RecibosFiltrados;
  }

  ngOnInit(): void {
      //AQUI VA EL SERVICIO QUE TRAE TODOS LOS RECIBOS
      //ESTO CUANDO EL ROL SEA DE ADMIN
      this.apiService.getTodosRecibos(this.fraccionamientoId).subscribe((recibos:any)=>{
        this.listaRecibos = recibos.body;
      });
      this.formRecibo = this.fb.group({
        Id_Propietario: ['', Validators.required],
        Fecha_Pago: ['', Validators.required],
        Monto: ['', Validators.required],
        Fecha_Vencimiento: ['', Validators.required],
        Monto_Penalizacion: [''],
        Monto_Descuento:['',Validators.required],
        Estatus: ['', Validators.required],
      });
  }


  editarRecibo(id: number): any {
    console.log(id);
    //aqui solo se carga la informacion del renglon seleccionado en el modal
    this.apiService.getReciboUnico(id).subscribe((recibos:any)=>{
      this.ReciboIndividual = recibos.body;
      console.log(this.ReciboIndividual[0]);
      this.formRecibo = this.fb.group({
        Id_Propietario: this.ReciboIndividual[0].propiedad.propietario.nombre + " " + this.ReciboIndividual[0].propiedad.propietario.apellidos,// aqui deberia ser la id del inquilino
        Fecha_Pago: this.ReciboIndividual[0].fechaPago === null ? '' : this.listaRecibos[0].fechaPago, // se pone una fecha en predeterminado
        Monto: this.ReciboIndividual[0].monto,
        Fecha_Vencimiento: this.ReciboIndividual[0].fechaVencimiento === null ? '' : this.listaRecibos[0].fechaVencimiento,
        Monto_Penalizacion: this.ReciboIndividual[0].montoPenalizacion === null ? 0 : this.listaRecibos[0].montoPenalizacion ,
        Monto_Descuento:this.ReciboIndividual[0].montoDescuento === null ? 0 : this.listaRecibos[0].montoDescuento,
        Estatus: this.ReciboIndividual[0].estatus === 'POR_PAGAR' ? 'POR PAGAR' : this.ReciboIndividual[0].estatus,
      });
    });

  }

  abrirModal(): any {

    
    var divModl =  document.getElementById('id02') as HTMLDivElement;
    divModl.style.display = 'block';
  }
  closeModal() {
    const modal = document.getElementById('id02');
  if (modal) {
    modal.style.display = 'none';
  }
  }

  envModal(){
    
   var divModl =  document.getElementById('id02') as HTMLDivElement;
   divModl.style.display = 'none';

  }

}
