import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confPagos } from 'src/app/data/interfaces/confPagos';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';

@Component({
  selector: 'app-modal-gestion-conf-pago',
  templateUrl: './modal-gestion-conf-pago.component.html',
  styleUrls: ['./modal-gestion-conf-pago.component.css']
})
export class ModalGestionConfPagoComponent {

  @Input() cerrarModal: any;
  @Input() confPagosDatos!: confPagos;
  public inquilinoSelect: confPagos  |null = null;
 public FormConfPagos!: FormGroup;
 public idFraccionamientoUsuer: any;
  constructor(private fb: FormBuilder,private datePipe: DatePipe,private ingresosService:IngresosService) { }

  ngOnInit() {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    console.log(this.confPagosDatos);
    
    if (!this.confPagosDatos) {
      this.FormConfPagos = this.fb.group({
        // id: ['', Validators.required],
       // id_fraccionamiento: ['', Validators.required],
        descripcion: ['', Validators.required],
        monto: ['', Validators.required],
        periodo: ['', Validators.required],
        tipo_pago: ['', Validators.required],
        porcentaje_descuento: ['', Validators.required],
        porcentaje_penalizacion: ['', Validators.required],
        dias_max_descuento: ['', Validators.required],
        dias_max_pago: ['', Validators.required],
        fecha_inicial: ['', Validators.required],
        estatus: ['', Validators.required],
        created_at: [''],
        updated_at: [''],
      });
    }
 
  }

  ngOnChanges() {

    if (this.confPagosDatos) {
      this.FormConfPagos = this.fb.group({
        // id: ['', Validators.required],
       // id_fraccionamiento: [this.confPagosDatos.id_fraccionamiento , Validators.required],
        descripcion: [this.confPagosDatos.descripcion, Validators.required],
        monto: [this.confPagosDatos.monto, Validators.required],
        periodo: [this.confPagosDatos.periodo, Validators.required],
        tipo_pago: [this.confPagosDatos.tipo_pago, Validators.required],
        porcentaje_descuento: [this.confPagosDatos.porcentaje_descuento, Validators.required],
        porcentaje_penalizacion: [this.confPagosDatos.porcentaje_penalizacion, Validators.required],
        dias_max_descuento: [this.confPagosDatos.dias_max_descuento, Validators.required],
        dias_max_pago: [this.confPagosDatos.dias_max_pago, Validators.required],
        fecha_inicial: [this.confPagosDatos.fecha_inicial, Validators.required],
        estatus: [this.confPagosDatos.estatus, Validators.required],
        created_at: [this.confPagosDatos.created_at= this.datePipe.transform(new Date(), 'yyyy/MM/dd'), Validators.required],
        updated_at: [this.confPagosDatos.updated_at= this.datePipe.transform(new Date(), 'yyyy/MM/dd'), Validators.required],
      });
    }

  }

  onSubmit() {
    
  }








  
  enviarModal() {
    // console.log(this.FormConfPagos.value);

    let formData = this.FormConfPagos.value;
  
    let datos: any = {};

    datos.id_fraccionamiento = this.idFraccionamientoUsuer;
    datos.descripcion = formData.descripcion;
    datos.monto = formData.monto;
    datos.periodo = formData.periodo;
    datos.tipo_pago = formData.tipo_pago;
    datos.porcentaje_descuento = formData.porcentaje_descuento;
    datos.porcentaje_penalizacion = formData.porcentaje_penalizacion;
    datos.dias_max_descuento = formData.dias_max_descuento;
    datos.dias_max_pago = formData.dias_max_pago;
    datos.fecha_inicial = formData.fecha_inicial;
    datos.estatus = formData.estatus;
    

this.ingresosService.ConfPagoPutUpdate(this.confPagosDatos.id,datos).subscribe( (r)=>{
console.log(r);

})

 }

}
