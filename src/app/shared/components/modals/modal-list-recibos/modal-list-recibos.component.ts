import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';

@Component({
  selector: 'app-modal-list-recibos',
  templateUrl: './modal-list-recibos.component.html',
  styleUrls: ['./modal-list-recibos.component.css']
})
export class ModalListRecibosComponent implements OnInit{
  @Input() cerrarModal:any;

  selectedOption!: string;
  plazoOption!: string;
  options = [
    {label: '1 Mes', value: '1'},
    {label: '2 Meses', value: '2'},
    {label: '3 Meses', value: '3'},
    {label: '6 Meses', value: '4'},
    {label: '12 Meses', value: '5'},
    {label: '1 Año', value: '6'},

  ];
  public formRecibo!: FormGroup;
  idFraccionamiento: any;
  fraccionamientoId: string | null;
  listaConfiguraciones: any;

  constructor(private fb: FormBuilder, 
    private inquilinoService:InquilinosService){ 
      this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
     }
  ngOnInit(){
    this.inquilinoService.getConfigPagos(this.fraccionamientoId).subscribe((configuraciones:any)=>{
      this.listaConfiguraciones = configuraciones.body;
    });
    ////
    this.idFraccionamiento = localStorage.getItem('id_fraccionamiento');
    this.formRecibo = this.fb.group({
      Id_Fraccionamiento: this.idFraccionamiento,
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

  enviarInfo(){
    console.log(this.plazoOption);
    const payload = {
      Id_Fraccionamiento: this.idFraccionamiento ,
      Id_Propietario: this.formRecibo.get('Id_Propietario')?.value,
      Id_Inquilino: this.formRecibo.get('Id_Inquilino')?.value,
      Fecha_Pago: this.formRecibo.get('Fecha_Pago')?.value, // se pone una fecha en predeterminado
      Monto:this.formRecibo.get('Monto')?.value,
      Fecha_Vencimiento: this.formRecibo.get('Fecha_Vencimiento')?.value,
      Monto_Penalizacion:this.formRecibo.get('Monto_Penalizacion')?.value,
      Monto_Descuento:this.formRecibo.get('Monto_Descuento')?.value,
      Estatus: this.formRecibo.get('Estatus')?.value,
      configuraion_id: this.formRecibo.get('Estatus')?.value,
      created_at: this.formRecibo.get('Fecha_Pago')?.value, // se pone una fecha en predeterminado,
      updated_at: this.formRecibo.get('Fecha_Pago')?.value, // se pone una fecha en predeterminado
      plazoPorGenerar: 1, // se pone una fecha en predeterminado

    }

    this.inquilinoService.postRecibo(payload).subscribe((data:any)=>{
      console.log(data);
    });

  }
}
