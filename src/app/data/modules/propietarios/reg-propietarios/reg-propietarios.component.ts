import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-reg-propietarios',
  templateUrl: './reg-propietarios.component.html',
  styleUrls: ['./reg-propietarios.component.css']
})
export class RegPropietariosComponent {
  public FormPropietarios!: FormGroup;
  public formData = new FormData();
  public formDataU = new FormData();
  public selectedFile!: any;
  public idFraccionamientoUsuer: any;
  public nombreFraccUser:any;
  public CP:any;
  public pdfUrl:any;
  constructor(private fb: FormBuilder, private sharedTitleService: SharedTitleComponentService, private propietarioService: PropietariosService,
    private usuariosService:UsuariosService,private router:Router) {
    sharedTitleService.emitChange("Registrar Residente")
  }
  ngOnInit() {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.nombreFraccUser = localStorage.getItem('nombre_fraccionamiento');
    this.CP = localStorage.getItem('codigo_postal_fraccionamiento');
    this.FormPropietarios = this.fb.group({
      // id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefonoFijo: ['', Validators.required],
      celular: ['', Validators.required],
      celularAlt: [''],
      // claveInterfon: ['', Validators.required],
      // claveInterfonAlt: ['', Validators.required],
      isInquilino: ['', Validators.required],
      identificacionUrl: [''],
      // fraccionamientoId: ['', Validators.required]
    });
  }

  archivo() {
    (document.querySelector("#inputfile") as HTMLInputElement).click();
  }

  selectedFilePredial(event: any) {
    if (event.target.files) {

       this.selectedFile = event.target.files[0];
      // console.log(this.selectedFile);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfUrl = e.target.result;
      };
      this.formData.set('archivoIdentificacion', event.target.files[0]);
      //this.FormPropietarios.get('identificacionUrl')?.setValue(event.target.files[0]);
      // this.FormPropietarios.patchValue({
      //   identificacionUrl: event.target.files[0]
      // });
    }
  }


  previewFile() {
    window.open(this.pdfUrl, '_blank');
  }

  enviarModal() {

    console.log(this.FormPropietarios.value);

    this.formData.append('fraccionamientoId', this.idFraccionamientoUsuer)
    const controls = this.FormPropietarios.controls;
    for (const name in controls) {

      if (controls[name].value !== null && controls[name].value !== '') {
        if (name != 'identificacionUrl') {
          this.formData.append(name, controls[name].value);
        }
      }
    }
 
    for (const name in controls) {
      if (controls[name].value !== null && controls[name].value !== '') {
        console.log(this.formData.get(name));
      }
    }

    console.log(this.formData.get('archivoIdentificacion'));
    // ! VALIDAR QUE CORREO NO ESTE YA REGISTRADO EN TABLA USUARIOS

    this.propietarioService.AddPropietario(this.formData).subscribe((r) => {

      
      console.log(r);

      if (r.icon=='success') {
        
        let datos ={};

        const inquilinoIS:any = this.formData.get('isInquilino');
        let inqJ:any = "";
        if (inquilinoIS=='0') {
          this.formDataU.append('rol','PROPIETARIO PROPIEDAD');{
            inqJ = 'PROPIETARIO PROPIEDAD';
          }
        } else {
          this.formDataU.append('rol','INQUILINO PROPIEDAD');
          inqJ = 'INQUILINO PROPIEDAD';
        }
        datos = {
          correo:this.FormPropietarios.value.correo,
          nombre:this.FormPropietarios.value.nombre,
          apellidos:this.FormPropietarios.value.apellidos,
          nombre_fraccionamiento:this.nombreFraccUser,
          codigo_postal:this.CP,
          rol:inqJ,
        }
      
       
        this.usuariosService.AddUser(datos).subscribe( (res)=>{
          console.log(res);
          
          if (res.icon == 'info') {
            setTimeout(() => {
            this.router.navigateByUrl('/dashboard/'+INTERNAL_ROUTES.MODULO_GESTION_PROPIETARIOS)
            }, 200);
          }
          
        })
      }
    })

   
  }
}
