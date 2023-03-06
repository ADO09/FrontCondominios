import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';

@Component({
  selector: 'app-modal-registro-propiedad',
  templateUrl: './modal-registro-propiedad.component.html',
  styleUrls: ['./modal-registro-propiedad.component.css']
})
export class ModalRegistroPropiedadComponent implements OnInit {
  @Input() cerrarModal: any;
  @Input() propiedadDatos!: any;

  public formPropiedades!: FormGroup;

constructor(private fb: FormBuilder,private propiedadesService:PropiedadesServiceService){
  
}
 
  ngOnInit() {
   
      this.formPropiedades = this.fb.group({
        tipoPropiedadId: ['-1', Validators.required],
        claveCatastral: ['', Validators.required],
        descripcion: ['', Validators.required],
        superficie: ['', Validators.required],
        balance: ['', Validators.required],
        estatusId: ['-1', Validators.required],
        propietarioId: ['', Validators.required],
        inquilinoId: [''],
        fraccionamientoId: ['', Validators.required],
        archivoPredial: ['', Validators.required],
      });
   
  }


  enviarModal(){

    
  }
}
