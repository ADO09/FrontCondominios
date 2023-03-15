import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-registro-conf-pago',
  templateUrl: './registro-conf-pago.component.html',
  styleUrls: ['./registro-conf-pago.component.css']
})
export class RegistroConfPagoComponent {

  public FormConfPagos!: FormGroup;
   public formData = new FormData();
   public idFraccionamientoUsuer: any;
   public today = new Date();
  public fechaActual = this.today.toLocaleDateString();

  constructor(private fb: FormBuilder,private sharedTitleService:SharedTitleComponentService,ingresosService:IngresosService) {
    sharedTitleService.emitChange("Registrar Pagos")
   }

  ngOnInit() {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    
    console.log(this.fechaActual);
    
    
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

  enviarModal(){

    this.formData.append('fraccionamientoId', this.idFraccionamientoUsuer)
    const controls = this.FormConfPagos.controls;
    for (const name in controls) {

      if (controls[name].value !== null && controls[name].value !== '') {
        if (name != 'identificacionUrl') {
          this.formData.append(name, controls[name].value);
        }
      }
    }

    this.formData.append('created_at',this.fechaActual)
    this.formData.append('updated_at',this.fechaActual)
    console.log(this.FormConfPagos.value);
    

    
  }
}
