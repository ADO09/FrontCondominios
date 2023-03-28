import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  proveedorFormRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    rfc: new FormControl('', [Validators.required]),
    correoContacto: new FormControl('', [Validators.required]),
    nombreContacto: new FormControl('', [Validators.required]),
    notas: new FormControl(''),
   // metodoDePagoId: new FormControl('', [Validators.required]),

  });

  constructor(
    private apiService: ProveedoresService,
    private readonly route: ActivatedRoute,
    private router: Router ,
    private sharedTitleService: SharedTitleComponentService
  ) {

  
    sharedTitleService.emitChange('Editar proveedor')
  }


  id!:number

  async ngOnInit() {

    this.route.params.subscribe(async (params: Params) => {
      
      this.id = params['id'];
      //OBTENER PROVEEDOR POR SU ID
      var data = (await this.apiService
        .get(this.id)
        .toPromise()) as any;

        

      //MOSTRAR DATOS DE PROVEEDOR EN EL FORM
      this.proveedorFormRegistro.patchValue(data.body);
      //this.proveedorFormRegistro.controls.metodoDePagoId.setValue(data.body.metodoDePago.id)
    })
  }

  updateProveedor(){
    let data:any = {
      ...this.proveedorFormRegistro.value ,
      fraccionamientoId:localStorage.getItem('id_fraccionamiento')
    }



    this.apiService.update(data ,this.id).subscribe(()=>{
      this.proveedorFormRegistro.reset

      this.router.navigate(['dashboard/proveedores/listado'])
    })
  }

  



}
