import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { VehiculosService } from 'src/app/data/services/api/vehiculos/vehiculos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  vehiculoFormRegistro = new FormGroup({
    id_tipo_vehiculo: new FormControl('', [Validators.required]),
    id_estado: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    submarca: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    placas: new FormControl('', [Validators.required]),
  });

  estados: any[] = [];
  tiposvehiculo: any[] = [];
  vehiculo: any = [];

  tarjetaCirculacion: any = null;

  urlTarjetaCirculacion!: string;

  idVehiculo!: string;
  selectedFile!: File;
  pdfUrl: any;

  marcasVehiculos:any[]=[]
  submarcasVehiculos:any[]=[]

  colores:any[]=[
    { "name": "Rojo", "value": "#FF0000" },
    { "name": "Verde", "value": "#00FF00" },
    { "name": "Azul", "value": "#0000FF" },
    { "name": "Amarillo", "value": "#FFFF00" },
    { "name": "Naranja", "value": "#FFA500" },
    { "name": "Morado", "value": "#800080" },
    { "name": "Rosa", "value": "#FFC0CB" },
    { "name": "Cyan", "value": "#00FFFF" },
    { "name": "Gris", "value": "#808080" },
    { "name": "Negro", "value": "#000000" },
    { "name": "Blanco", "value": "#FFFFFF" },
  ]

  constructor(
    private apiService: VehiculosService,
    private readonly route: ActivatedRoute,
    private router: Router ,
    private sharedTitleService: SharedTitleComponentService
  ) {

  
    sharedTitleService.emitChange('Editar vehículo')
  }

  async ngOnInit() {
    //OBTENER ESATODOS DE MEXICO
    var data = (await this.apiService.getEstadosMexico().toPromise()) as any;
   
    data.body = data.body.map((estado: {
      id: any; nombre: string; 
    }) => {
      return {
        id:estado.id ,
        nombre: estado.nombre.toUpperCase()
      };
    });

    this.estados = data.body;

    //OBTENER LOS TIPOS DE VEHICULOS
    var data = (this.tiposvehiculo = (await this.apiService
      .getTiposVehiculos()
      .toPromise()) as any);
      data.body = data.body.map((estado: {
        id: any; nombre: string; 
      }) => {
        return {
          id:estado.id ,
          nombre: estado.nombre.toUpperCase()
        };
      });
  
      this.tiposvehiculo = data.body;

    this.route.params.subscribe(async (params: Params) => {
      //GUARDAR ID DEL VEHICULO PARA POSTERIOR USO
      this.idVehiculo = params['id'];
      //OBTENER VEHICULO POR SU ID
      var data = (await this.apiService
        .getVehiculo(this.idVehiculo)
        .toPromise()) as any;
      this.vehiculo = data.body;

      var data = (await lastValueFrom(this.apiService.getMarcas()))
      this.marcasVehiculos = data.body

      let textConEspacios = this.vehiculo.marca
      let textoSinEspacios = textConEspacios.replace(/[\s-]/g, "").toLowerCase() + "Models";

  if(textoSinEspacios == "minicooperModels") textoSinEspacios = "miniModels"

  if(textoSinEspacios == "mercedesbenzModels") textoSinEspacios = "mercedezModels"


      var data = (await lastValueFrom(this.apiService.getSubmarcas(textoSinEspacios)))
      this.submarcasVehiculos = data.body

      //MOSTRAR DATOS DE VEHICULO EN EL FORM
      this.vehiculoFormRegistro.patchValue(this.vehiculo);

      //VERIFICAR SI TIENE UN ARCHIVO DE TARJETA DE CIRCULACION ASOCIADA
      if (this.vehiculo.path_tarjeta_circulacion != null) {
        this.tarjetaCirculacion = this.vehiculo.path_tarjeta_circulacion;

        //OBTENER ARCHIVO PDF DE LA API
        this.apiService
          .getFilePrivate(this.tarjetaCirculacion)
          .subscribe((blob) => {
            //CREAR UN OBJETO URL PARA EL ARCHIVO BLOB
            this.urlTarjetaCirculacion  = window.URL.createObjectURL(blob);
          });
      }
    });
  }


  /**
   * !ACTUALIZAR DATOS DEL VEHICULO
   */
  updateVehiculo() {

    var datos:any = {
      ...this.vehiculoFormRegistro.value ,
    }
    var formData = new FormData()
    Object.keys(datos).forEach((key) => formData.append(key, datos[key]));

    if(this.selectedFile){
      console.log('selected fi;e')
      formData.append('tarjeta_circulacion',this.selectedFile)
    }
    console.log(formData.getAll)
    this.apiService
      .updateVehiculo(this.idVehiculo, formData)
      .subscribe(() => {
        this.vehiculoFormRegistro.reset(); //LIMPIO EL FORM
       this.router.navigate(['/dashboard/vehiculos/listado']); //REDIRECIONO A LISTAR VEHICULOS
      });
  }

  /**
   * ? FUNCION ENCARGADA DE DESCARGAR LA TARJETA DE CIRCULACION
   */
   downloadTarjetaCirculacion(){

    window.open(this.urlTarjetaCirculacion)
    return false
    //CREAR UN ENLACE TEMPORAL PARA DESCARGAR EL ARCHIVO
    const a = document.createElement('a');
    a.href = this.urlTarjetaCirculacion;
    a.download = 'archivo.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    //LIBERAR EL OBJETO URL
    window.URL.revokeObjectURL(this.urlTarjetaCirculacion);
 }

 selectFileTarjetaCirculacion(){
  (document.querySelector('#inputFile') as HTMLInputElement).click();
 }

 onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.pdfUrl = e.target.result;
  };
  reader.readAsDataURL(file);
}
previewFile() {
  window.open(this.pdfUrl, '_blank');
}

eliminarVehiculo(){
  this.apiService.bajaVehiculo(this.idVehiculo).subscribe(()=>{
    this.router.navigate(['/dashboard/vehiculos/listado']); //REDIRECIONO A LISTAR VEHICULOS
  });
}

marcaSelect(event:any){
  const selectValue = ((event.target) as HTMLSelectElement).value

  let textoSinEspacios = selectValue.replace(/[\s-]/g, "").toLowerCase() + "Models";

  if(textoSinEspacios == "minicooperModels") textoSinEspacios = "miniModels"

  if(textoSinEspacios == "mercedesbenzModels") textoSinEspacios = "mercedezModels"


  this.apiService.getSubmarcas(textoSinEspacios).subscribe(submarcas =>{
    this.submarcasVehiculos = submarcas.body
  })

}


}
