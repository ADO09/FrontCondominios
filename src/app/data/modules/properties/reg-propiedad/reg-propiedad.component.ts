import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { propietarios } from 'src/app/data/interfaces/propietariosI';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-reg-propiedad',
  templateUrl: './reg-propiedad.component.html',
  styleUrls: ['./reg-propiedad.component.css']
})
export class RegPropiedadComponent {

  constructor(private router:Router ,private propietarios:PropietariosService,private cd: ChangeDetectorRef,
    private sharedTitleService:SharedTitleComponentService,private fb: FormBuilder,private propiedadesService:PropiedadesServiceService){

      sharedTitleService.emitChange("Registrar Propiedad")
  }
  public formPropiedades!: FormGroup;
  public propietariosData!:propietarios[];
  public inquilinoSelect!:propietarios;
  ngOnInit(){
   
    this.propietarios.propietariosGetInquilinos().subscribe( (r) => {
  
     // this.propiedadesData = r.body;
      console.log(r);
     // console.log(this.propiedadesData);
     this.propietariosData = r.body;
    });
    
  
      // this.propiedadesService.propiedadesGetAll().subscribe( (r) => {
  
      //   this.propiedadesData = r.body;
      //   // console.log(r);
      //   // console.log(this.propiedadesData);
        
      // });
      var inquilino:any;
      if (!this.inquilinoSelect) {
        inquilino = '';
      } else {
        inquilino = this.inquilinoSelect.nombre + this.inquilinoSelect.apellidos;
      }

      this.formPropiedades = this.fb.group({
        tipoPropiedadId: ['', Validators.required],
        claveCatastral: ['', Validators.required],
        descripcion: ['', Validators.required],
        superficie: ['', Validators.required],
        balance: ['', Validators.required],
        estatusId: ['', Validators.required],
        propietarioId: ['', Validators.required],
        inquilinoId: [inquilino],
        fraccionamientoId: ['', Validators.required],
       // archivoPredial: ['', Validators.required],
      });
    }

    ngOnChanges(){
      this.formPropiedades.setValue({
        inquilinoId:[this.inquilinoSelect.nombre]
      })
    }

    addPropiedad(){
      
    }
    
    manejarDato(dato: any) {
      // const datoProp = JSON.parse(dato);
      // console.log(dato);

     
      //   this.inquilinoSelect = dato;
      // console.log(this.inquilinoSelect.nombre);
      
      this.inquilinoSelect = dato;
      console.log(this.inquilinoSelect.nombre);
      this.cd.detectChanges();
      
    }

    abrModalinquilinos(){
      setTimeout(() => {
        var divModl = document.getElementById('id01') as HTMLDivElement;
        divModl.style.display = 'block';
      }, 100);
    }

    

    envModal() {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'none';
    }
}
