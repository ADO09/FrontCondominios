import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { propiedad } from 'src/app/data/interfaces/propiedad';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';

@Component({
  selector: 'app-modal-list-propiedades',
  templateUrl: './modal-list-propiedades.component.html',
  styleUrls: ['./modal-list-propiedades.component.css'],
})
export class ModalListPropiedadesComponent implements OnInit {
  @Input() cerrarModal: any;
  @Input() propiedadDatos!: any;

  public formPropiedades!: FormGroup;

  constructor(private fb: FormBuilder,private propiedadesService:PropiedadesServiceService) {}

  ngOnInit() {
    if (!this.propiedadDatos) {
      this.formPropiedades = this.fb.group({
        tipoPropiedadId: ['', Validators.required],
        claveCatastral: ['', Validators.required],
        descripcion: ['', Validators.required],
        superficie: ['', Validators.required],
        balance: ['', Validators.required],
        estatusId: ['', Validators.required],
        propietarioId: ['', Validators.required],
        inquilinoId: [''],
        fraccionamientoId: ['', Validators.required],
       // archivoPredial: ['', Validators.required],
      });
    } else {
      let propiedad =
        this.propiedadDatos?.tipoPropiedad.id +
        '.-' +
        this.propiedadDatos?.tipoPropiedad.descripcion;

        console.log(this.propiedadDatos.estatus.id);
        
        let estatus =
        this.propiedadDatos?.estatus.id +
        '.-' +
        this.propiedadDatos?.estatus.descripcion;


      // this.formPropiedades = this.fb.group({
      //   tipoPropiedadId: propiedad || '',
      //   claveCatastral: this.propiedadDatos?.claveCatastral || '',
      //   descripcion: this.propiedadDatos?.descripcion || '',
      //   superficie: this.propiedadDatos?.superficie || '',
      //   balance: this.propiedadDatos?.balance || '',
      //   estatusId: estatus || '',
      //   propietarioId: this.propiedadDatos?.propietario.nombre || '',
      //   inquilinoId: this.propiedadDatos?.inquilino.nombre ?? null,
      //   fraccionamientoId: this.propiedadDatos?.fraccionamientoId || '',
      // //  archivoPredial: this.propiedadDatos?.predialUrl || '',
      // });
    }
  }

  ngOnChanges() {
    if (this.propiedadDatos) {
      let propiedad =
        this.propiedadDatos?.tipoPropiedad.id +
        '.-' +
        this.propiedadDatos?.tipoPropiedad.descripcion;

        let estatus =
        this.propiedadDatos?.estatus.id +
        '.-' +
        this.propiedadDatos?.estatus.descripcion;

        var inquilino:any;
        if (!this.propiedadDatos.inquilino) {
          inquilino =this.propiedadDatos.inquilino;
        } else {
          inquilino = this.propiedadDatos.inquilino.nombre;
        }

      this.formPropiedades = this.fb.group({
        tipoPropiedadId:  String(this.propiedadDatos?.tipoPropiedad.id) || '',
        claveCatastral: this.propiedadDatos?.claveCatastral || '',
        descripcion: this.propiedadDatos?.descripcion || '',
        superficie: this.propiedadDatos?.superficie || '',
        balance: this.propiedadDatos?.balance || '',
        estatusId:  String(this.propiedadDatos?.estatus.id)|| '',
        propietarioId: this.propiedadDatos?.propietario.nombre || '',
        inquilinoId: inquilino || null,
        fraccionamientoId: this.propiedadDatos?.fraccionamientoId || '',
       // archivoPredial: this.propiedadDatos?.predialUrl || '',
      });
    }
  }

  enviarModal() {
    console.log(this.formPropiedades.value);

    const formData = new FormData();
    formData.append('balance', this.propiedadDatos.balance);
    formData.append('claveCatastral',  this.propiedadDatos.claveCatastral);
    formData.append('descripcion',  this.propiedadDatos.descripcion);
    formData.append('estatusId',  this.propiedadDatos.estatus.id);
    formData.append('fraccionamientoId', this.propiedadDatos.fraccionamientoId);

    var inquilino:any;
    if (!this.propiedadDatos.inquilino) {
      inquilino =this.propiedadDatos.inquilino;
    } else {
      inquilino = this.propiedadDatos.inquilino.nombre;
    }
    formData.append('inquilinoId',  inquilino);
    formData.append('propietarioId',  this.propiedadDatos.propietario.id);
    formData.append('superficie',  this.propiedadDatos.superficie);
    formData.append('tipoPropiedadId',  this.propiedadDatos.tipoPropiedad.id);



    
    console.log(formData.get('balance'));
    console.log( formData.get('claveCatastral'));
    console.log(formData.get('descripcion'));
    console.log(formData.get('estatusId'));
    console.log(formData.get('fraccionamientoId'));
    console.log(formData.get('inquilinoId'));
    console.log(formData.get('propietarioId'));
    console.log(formData.get('superficie'));
    console.log(formData.get('tipoPropiedadId'));
    
   
    
    
this.propiedadesService.propiedadesUpdate(this.propiedadDatos.id,formData).subscribe( (r)=> {

  console.log(r);
})

  }
}
