import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Egreso } from 'src/app/data/interfaces/egresos';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { enviroment as ENV } from 'src/environments/enviroments.dev';

@Component({
  selector: 'app-gestion-egresos',
  templateUrl: './gestion-egresos.component.html',
  styleUrls: ['./gestion-egresos.component.css']
})
export class GestionEgresosComponent {
  public FormEgresos: any;
  public egresoData!:any;
 public id:any;
 public tiposEgresos!:any;
 public formData = new FormData();
 public selectedFile: File | undefined;
 public  pdfUrl: any;
 public api = ENV.urlAPI;
  listaEgresos: any;


  constructor( private route: ActivatedRoute,private egresosService:EgresosService,private formBuilder:FormBuilder){
    this.id = +this.route.snapshot.params['id_egreso'];
    console.log(this.id);
  }


  ngOnInit(){
        this.FormEgresos = this.formBuilder.group({
      // id: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      comprobanteUrl: [, Validators.required],
      montoTotal: ['', Validators.required],
      isVerified: ['', Validators.required],
      tipoEgreso:['', Validators.required] ,
      estatusEgreso:['', Validators.required] ,
      tipoPago: ['', Validators.required],
      fechaPago:['', Validators.required] ,
      // TipoEgresoEstatus:['', Validators.required]
      // detalleEgreso: ['', Validators.required]
    });


   
    this.egresosService.getOneEgreso(this.id).subscribe((r) => {
      this.egresoData = r.body;
      console.log(this.egresoData);
      
 this.egresosService.getTipoEgresoQPFraccionamiento(localStorage.getItem('id_fraccionamiento')).subscribe((res) =>{
      
  
  this.tiposEgresos = res.body;
  
  console.log(this.tiposEgresos);
  
       
     
        this.FormEgresos = this.formBuilder.group({
          descripcion: [this.egresoData.descripcion, Validators.required],
          comprobanteUrl: [''],
          montoTotal: [this.egresoData.montoTotal, Validators.required],
          isVerified: [this.egresoData.isVerified, Validators.required],
          tipoEgreso: [this.egresoData.tipoEgreso.id, Validators.required],
          estatusEgreso: [this.egresoData.estatusEgreso.id, Validators.required],
          tipoPago: [this.egresoData.tipoPago, Validators.required],
          fechaPago:[this.egresoData.fechaPago, Validators.required] ,
          // TipoEgresoEstatus:[this.egresoData.tipoEgreso.status, Validators.required]
        });
       

      });
    
         console.log(this.egresoData.detalleEgreso);
        
    });  
  }


  
  fraccionamientoId(fraccionamientoId: any) {
    throw new Error('Method not implemented.');
  }

  enviarModal(){

    console.log(this.FormEgresos.value);
  

    var TipoEgreso:any =  this.FormEgresos.value.tipoEgreso;

    var fraccionamientoId:any = localStorage.getItem('id_fraccionamiento');
   this.formData.append('descripcion', this.FormEgresos.value.descripcion);
    this.formData.append('comprobanteUrl', this.FormEgresos.value.comprobanteUrl);
    this.formData.append('montoTotal', this.FormEgresos.value.montoTotal);
    this.formData.append('isVerified', this.FormEgresos.value.isVerified);
     this.formData.append('tipoEgreso', TipoEgreso);
    // this.formData.append('estatusEgreso', this.FormEgresos.value.estatusEgreso);
     this.formData.append('estatusEgresoId', this.FormEgresos.value.estatusEgreso);
    this.formData.append('fraccionamientoId', fraccionamientoId);
      this.formData.append('fechaPago', this.FormEgresos.value.fechaPago);
    this.formData.append('tipoPago', this.FormEgresos.value.tipoPago);


    this.egresosService.updateEgreso(this.egresoData.id,this.formData).subscribe( (r)=>{
      console.log(r);
      
    })
    
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.FormEgresos.value.comprobanteUrl = event.target.files[0];
   
    const file = event.target.files[0];
    this.formData.append('archivoComprobante', file);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.pdfUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  clickInputFile() {
    (document.querySelector('#inputFile') as HTMLInputElement).click();
  }

  previewFile() {
    
  }

}
