import { ChangeDetectorRef, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private router:Router ,private propietariosService:PropietariosService,private cd: ChangeDetectorRef,
    private sharedTitleService:SharedTitleComponentService,private fb: FormBuilder,private propiedadesService:PropiedadesServiceService){

      sharedTitleService.emitChange("Registrar Propiedad")
  }

  public formData = new FormData();
  public formPropiedades!: FormGroup;
  public propietariosDataI!:propietarios[];
  public propietariosDataP!:propietarios[];
  public inquilinoSelect: propietarios | null = null;
  public propietarioSelect: propietarios | null = null;
  public idFraccionamientoUsuer:any;
  ngOnInit(){
   
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');


    console.log(this.idFraccionamientoUsuer);
    
    this.propietariosService.propietariosGetInquilinos().subscribe( (r) => {
  
     // this.propiedadesData = r.body;
      console.log(r);
     // console.log(this.propiedadesData);
     this.propietariosDataI = r.body;
    });


    this.propietariosService.propietariosGetPropietarios().subscribe( (r) => {
  
      // this.propiedadesData = r.body;
       console.log(r);
      // console.log(this.propiedadesData);
      this.propietariosDataP = r.body;
     });
    
  
      // this.propiedadesService.propiedadesGetAll().subscribe( (r) => {
  
      //   this.propiedadesData = r.body;
      //   // console.log(r);
      //   // console.log(this.propiedadesData);
        
      // });
 
    
      this.formPropiedades = this.fb.group({
        tipoPropiedadId: ['', Validators.required],
        claveCatastral: ['', Validators.required],
        descripcion: ['', Validators.required],
        superficie: ['', Validators.required],
        balance: ['', Validators.required],
        estatusId: ['', Validators.required],
        propietarioId: ['', Validators.required],
        inquilinoId: [''],
        fraccionamientoId: [this.idFraccionamientoUsuer, Validators.required],
        archivoPredial: ['', Validators.required],
      });
    }

    // ngOnChanges(){
    //   this.formPropiedades.setValue({
    //     inquilinoId:[this.inquilinoSelect.nombre]
    //   })
    // }

    selectedFilePredial(event:any){
        if (event.target.files) {
         

          this.formData.set('archivoPredial',  event.target.files[0]);

        }
    }

    archivo(){
      (document.querySelector("#inputfile") as HTMLInputElement).click();
    }
    addPropiedad(){
      console.log(  this.propietarioSelect?.id);
      console.log(this.inquilinoSelect?.id);
      var idPropietario:any = this.propietarioSelect?.id;

      
      var idInquilino:any = this.inquilinoSelect?.id;
      


      
      this.formData.set('tipoPropiedadId', this.formPropiedades.get('tipoPropiedadId')?.value);
      this.formData.set('claveCatastral', this.formPropiedades.get('claveCatastral')?.value);
      this.formData.set('descripcion', this.formPropiedades.get('descripcion')?.value);
      this.formData.set('superficie', this.formPropiedades.get('superficie')?.value);
      this.formData.set('balance', this.formPropiedades.get('balance')?.value);
      this.formData.set('estatusId', this.formPropiedades.get('estatusId')?.value);
      this.formData.set('propietarioId', idPropietario);
      if (idInquilino) {
        this.formData.set('inquilinoId',idInquilino);
      }
      this.formData.set('fraccionamientoId', this.idFraccionamientoUsuer);
      

console.log(this.formData.get('tipoPropiedadId'));
console.log(this.formData.get('claveCatastral'));
console.log(this.formData.get('descripcion'));
console.log(this.formData.get('superficie'));
console.log(this.formData.get('balance'));
console.log(this.formData.get('estatusId'));
console.log(this.formData.get('propietarioId'));
console.log(this.formData.get('inquilinoId'));
console.log(this.formData.get('fraccionamientoId'));
console.log(this.formData.get('archivoPredial'));


this.propiedadesService.postPropiedad(this.formData).subscribe((r)=>{
  console.log(r);
  
})
    }
    
    manejarDato(dato: any) {
      this.inquilinoSelect = dato;
      console.log(this.inquilinoSelect?.nombre);
      this.formPropiedades.patchValue({
        inquilinoId:[this.inquilinoSelect?.nombre +' ' + this.inquilinoSelect?.apellidos]
      })

      this.cd.detectChanges();
      
    }

    manejarDatoP(dato: any) {
      this.propietarioSelect = dato;
      console.log(this.propietarioSelect?.nombre);
      this.formPropiedades.patchValue({
        propietarioId:[this.propietarioSelect?.nombre +' ' + this.propietarioSelect?.apellidos]
      })

      this.cd.detectChanges();
      
    }

    handleClearInput() {
      this.inquilinoSelect = null;
      this.formPropiedades.patchValue({
        inquilinoId:null
      })
      
    }
  
    handleClearInput2() {
      this.propietarioSelect = null;
      this.formPropiedades.patchValue({
        propietarioId:null
      })
      // this.formPropiedades.get('propietarioId')?.setValidators([Validators.required]);
      // this.formPropiedades.get('propietarioId')?.updateValueAndValidity();
      console.log(this.formPropiedades.valid);
    }

    abrModalinquilinos(){
      setTimeout(() => {
        var divModl = document.getElementById('id01') as HTMLDivElement;
        divModl.style.display = 'block';
      }, 100);
    }


    abrModalPropietarios(){
      setTimeout(() => {
        var divModl2 = document.getElementById('id02') as HTMLDivElement;
        divModl2.style.display = 'block';
      }, 100);
    }
    

    envModalI() {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'none';
    }

    envModalP() {
      var divModl2 = document.getElementById('id02') as HTMLDivElement;
      divModl2.style.display = 'none';
    }
}
