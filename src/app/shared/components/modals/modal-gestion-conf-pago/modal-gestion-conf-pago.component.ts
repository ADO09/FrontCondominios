import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confPagos } from 'src/app/data/interfaces/confPagos';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    console.log(this.confPagosDatos);
    
    if (!this.confPagosDatos) {
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
 
  }

  ngOnChanges() {

    if (this.confPagosDatos) {
      this.FormConfPagos = this.fb.group({
        // id: ['', Validators.required],
        id_fraccionamiento: [this.confPagosDatos.id_fraccionamiento , Validators.required],
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
        created_at: [this.confPagosDatos.created_at, Validators.required],
        updated_at: [this.confPagosDatos.updated_at, Validators.required],
      });
    }

  }

  onSubmit() {
    console.log(this.FormConfPagos.value);
  }








  
  enviarModal() {
   
 }

}
