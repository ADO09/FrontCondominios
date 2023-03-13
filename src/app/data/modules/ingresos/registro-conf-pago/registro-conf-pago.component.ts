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

  constructor(private fb: FormBuilder,private sharedTitleService:SharedTitleComponentService,ingresosService:IngresosService) {
    sharedTitleService.emitChange("Registrar Pagos")
   }

  ngOnInit() {

    
    
    
      this.FormConfPagos = this.fb.group({
        // id: ['', Validators.required],
        id_fraccionamiento: ['', Validators.required],
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
        created_at: ['', Validators.required],
        updated_at: ['', Validators.required],
      });
    
 
  }

  enviarModal(){

    console.log(this.FormConfPagos.value);
    
  }
}
