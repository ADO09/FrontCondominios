import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';

@Component({
  selector: 'app-modal-list-recibos',
  templateUrl: './modal-list-recibos.component.html',
  styleUrls: ['./modal-list-recibos.component.css']
})
export class ModalListRecibosComponent implements OnInit{
  @Input() cerrarModal:any;

  public formRecibo!: FormGroup;
  idFraccionamiento: any;

  constructor(private fb: FormBuilder, 
    private inquilinoService:InquilinosService,
    private propiedadesService: PropiedadesServiceService){  }
  ngOnInit(){
    //OBTIENE LAS PROPIEDADES DEL FRACCIONAMIENTO ACTUAL (SEGUN EL LOCAL STORAGE)
    this.idFraccionamiento = localStorage.getItem('FraccionamientoId');
    this.propiedadesService.propiedadesGetFiltroFraccionamiento(this.idFraccionamiento).subscribe((propiedad:any)=>{
      console.log(propiedad);
    });
    ////
    console.log(this.idFraccionamiento);
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
