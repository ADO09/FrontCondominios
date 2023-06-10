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
 public tipoPago:any = ""; //variable para cambio de select

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

  TipoPagoOnchange(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    // this.selectValueIdentInter = selectedValue
    this.tipoPago = selectedValue
    console.log('Valor seleccionado:', selectedValue);

    // this.getAllFilters()

    if(this.tipoPago == 'ORDINARIO' && this.FormConfPagos.value.periodo == 'UNICO' ){
      this.FormConfPagos.patchValue({
        periodo: 
          null,
      });
      
      console.log("3");
      
    }
   }

  ngOnChanges() {
  
    if (this.confPagosDatos) {
      this.tipoPago = this.confPagosDatos.tipo_pago;
      console.log(this.tipoPago);
      console.log("aoihdsasoidhasoidhasiodhoiashdioashdoiashiodhasiodhaiodsahio");
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
  
    let periodo:any;
    // let datos: any = {};

    // datos.id_fraccionamiento = this.idFraccionamientoUsuer;
    // datos.descripcion = formData.descripcion;
    // datos.monto = formData.monto;
    // datos.periodo = formData.periodo;
    // datos.tipo_pago = formData.tipo_pago;
    // datos.porcentaje_descuento = formData.porcentaje_descuento;
    // datos.porcentaje_penalizacion = formData.porcentaje_penalizacion;
    // datos.dias_max_descuento = formData.dias_max_descuento;
    // datos.dias_max_pago = formData.dias_max_pago;
    // datos.fecha_inicial = formData.fecha_inicial;
    // datos.estatus = formData.estatus;
    
   

    if (this.tipoPago != 'ORDINARIO' && this.tipoPago != '') {
      periodo = 'UNICO'

      console.log("1");
      
    }
    
    if(this.tipoPago == 'ORDINARIO' && formData.periodo != 'UNICO' ){
      periodo = formData.periodo
      console.log("2");
      
    }

    if(this.tipoPago == 'ORDINARIO' && formData.periodo == 'UNICO' ){
      this.FormConfPagos.patchValue({
        periodo: 
          null,
      });
      periodo = '';
      console.log("3");
      
    }
    let datos: any = {
      // "id_fraccionamiento": this.idFraccionamientoUsuer,
      "descripcion": formData.descripcion,
      "monto": formData.monto,
      "periodo": periodo,
      "tipo_pago": formData.tipo_pago,
      "porcentaje_descuento": formData.porcentaje_descuento,
      "porcentaje_penalizacion": formData.porcentaje_penalizacion,
      "dias_max_descuento": formData.dias_max_descuento,
      "dias_max_pago": formData.dias_max_pago,
       "fecha_inicial": formData.fecha_inicial,
      // "estatus": formData.estatus
    };
    

    // Ejemplo de acceso a los valores
    // console.log('id_fraccionamiento:', datos.id_fraccionamiento);
    // console.log('descripcion:', datos.descripcion);
    // console.log('monto:', datos.monto);
    // console.log('periodo:', datos.periodo);
    // console.log('tipo_pago:', datos.tipo_pago);
    // console.log('porcentaje_descuento:', datos.porcentaje_descuento);
    // console.log('porcentaje_penalizacion:', datos.porcentaje_penalizacion);
    // console.log('dias_max_descuento:', datos.dias_max_descuento);
    // console.log('dias_max_pago:', datos.dias_max_pago);
    // console.log('fecha_inicial:', datos.fecha_inicial);
    // console.log('estatus:', datos.estatus);
    
    console.log(datos);
    

// let formDatae = new FormData();
// formDatae.append('id_fraccionamiento', this.idFraccionamientoUsuer);
// formDatae.append('descripcion', formData.descripcion);
// formDatae.append('monto', formData.monto);
// formDatae.append('periodo', formData.periodo);
// formDatae.append('tipo_pago', formData.tipo_pago);
// formDatae.append('porcentaje_descuento', formData.porcentaje_descuento);
// formDatae.append('porcentaje_penalizacion', formData.porcentaje_penalizacion);
// formDatae.append('dias_max_descuento', formData.dias_max_descuento);
// formDatae.append('dias_max_pago', formData.dias_max_pago);
// formDatae.append('fecha_inicial', formData.fecha_inicial);
// formDatae.append('estatus', formData.estatus);

// console.log('id_fraccionamiento:', formDatae.get('id_fraccionamiento'));
// console.log('descripcion:', formDatae.get('descripcion'));
// console.log('monto:', formDatae.get('monto'));
// console.log('periodo:', formDatae.get('periodo'));
// console.log('tipo_pago:', formDatae.get('tipo_pago'));
// console.log('porcentaje_descuento:', formDatae.get('porcentaje_descuento'));
// console.log('porcentaje_penalizacion:', formDatae.get('porcentaje_penalizacion'));
// console.log('dias_max_descuento:', formDatae.get('dias_max_descuento'));
// console.log('dias_max_pago:', formDatae.get('dias_max_pago'));
// console.log('fecha_inicial:', formDatae.get('fecha_inicial'));
// console.log('estatus:', formDatae.get('estatus'));

this.ingresosService.ConfPagoPutUpdate(this.confPagosDatos.id,datos).subscribe( (r)=>{
console.log(r);

})

 }


 
}
