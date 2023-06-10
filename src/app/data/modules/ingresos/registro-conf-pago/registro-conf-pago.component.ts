import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-registro-conf-pago',
  templateUrl: './registro-conf-pago.component.html',
  styleUrls: ['./registro-conf-pago.component.css']
})
export class RegistroConfPagoComponent {

  public FormConfPagos!: FormGroup;
  //  public formData = new FormData();
   public idFraccionamientoUsuer: any;
   public today = new Date();
   public tipoPago:any = ""; //variable para cambio de select
  // public fechaActual = this.today.toLocaleDateString();
  public currentDate!: any;
  constructor(private fb: FormBuilder,private sharedTitleService:SharedTitleComponentService,private ingresosService:IngresosService,private datePipe: DatePipe,private router:Router) {
    sharedTitleService.emitChange("Registrar Pagos")

    this.currentDate = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
    console.log(this.currentDate);
    
   }

  ngOnInit() {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    
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
       // created_at: ['', Validators.required],
       // updated_at: ['', Validators.required],
      });
    
 
  }

  
  TipoPagoOnchange(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    // this.selectValueIdentInter = selectedValue
    this.tipoPago = selectedValue
    console.log('Valor seleccionado:', selectedValue);

    // this.getAllFilters()
   }

  enviarModal(){

    //this.formData.append('id_fraccionamiento', this.idFraccionamientoUsuer)
    const controls = this.FormConfPagos.controls;
    // for (const name in controls) {

    //   if (controls[name].value !== null && controls[name].value !== '') {
       
    //       this.formData.append(name, controls[name].value);
        
    //   }
    // }

    // this.formData.append('created_at',this.currentDate)
    // this.formData.append('updated_at',this.currentDate)
    console.log(this.FormConfPagos.value);
    
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
    
 
    console.log(datos);
    

this.ingresosService.AddPostConfPago(datos).subscribe( (r) =>{
  console.log(r);

  if (r.icon == 'success') {
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard/'+INTERNAL_ROUTES.MODULO_CUOTAS)
      }, 200);
  }
  
})
    // this.formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
  }


  
}
