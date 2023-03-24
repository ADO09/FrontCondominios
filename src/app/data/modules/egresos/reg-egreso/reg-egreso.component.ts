import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';

@Component({
  selector: 'app-reg-egreso',
  templateUrl: './reg-egreso.component.html',
  styleUrls: ['./reg-egreso.component.css']
})
export class RegEgresoComponent {
  public selectedFile: File | undefined;
  public FormEgresos!: FormGroup;
  public tiposEgresos!:any;
  public formData = new FormData();
  public  pdfUrl: any;
  previewFile() {
    window.open(this.pdfUrl, '_blank');
  }
  constructor( private egresosService:EgresosService,private formBuilder:FormBuilder,private fb: FormBuilder,private productoService:ProductosService,private egresoSrvice:EgresosService){
   }
  

  ngOnInit(){

    // var data  = (await this.productoService.GetProductosQPFraccionamiento(localStorage.getItem('id_fraccionamiento')).toPromise()) as any;
    // this.productos = data.body

    // console.log(this.productos);
    
    // this.productoTemp =data.body
    
    //   this.FormDetalleEgresos = this.fb.group({
    //     cantidad: ['', Validators.required],
    //     descripcion: ['', Validators.required],
    //     precio_unitario: ['', Validators.required],
    //     producto: ['', Validators.required]
    //   });
    this.FormEgresos = this.formBuilder.group({
      // id: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      comprobanteUrl: ['', Validators.required],
      montoTotal: ['', Validators.required],
      isVerified: ['', Validators.required],
      tipoEgreso:['', Validators.required] ,
      estatusEgreso:['', Validators.required] ,
      // TipoEgresoEstatus:['', Validators.required]
      // detalleEgreso: ['', Validators.required]
    });

    this.egresosService.getTipoEgresoQPFraccionamiento(localStorage.getItem('id_fraccionamiento')).subscribe((res) =>{
      
  
      this.tiposEgresos = res.body;
      
      console.log(this.tiposEgresos);
 

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


  enviarModal(){

    const formValues = this.FormEgresos.value;


    const fraccionamientoId:any = localStorage.getItem('id_fraccionamiento') ;
    this.formData.append('descripcion', formValues.descripcion);
    this.formData.append('montoTotal', formValues.montoTotal);
    this.formData.append('isVerified', formValues.isVerified);
    this.formData.append('tipoEgreso', formValues.tipoEgreso);
    this.formData.append('estatusEgresoId', formValues.estatusEgreso);
    this.formData.append('fraccionamientoId', fraccionamientoId);


    this.egresosService.postEgreso(this.formData).subscribe( (r)=>{
      console.log(r);
      
    })
  }




  // public FormDetalleEgresos!: FormGroup;

 
  // showModal = false
  // productoTemp:any[]=[]
  // productos:any[]=[]
  // idProducto: string | undefined;
  // descripcionProducto: string | undefined;
  // public productoSelect: any | null = null;
  // public JSONEGRS:any;
  // public productoData!: any[];
 
  

 
 

 
  // searchPropiedad(search:any ,event:any){

  //   event.stopPropagation();
  //   //event.stopPropagation();
  //   //console.log(search)
  //   const matchingProducto = this.productoTemp.filter(u => 
  //     u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
  //     u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
  //     u.precio_unitario.toLowerCase().includes(search.toLowerCase())
  //   );
  //   //console.log(matchingUsers);

  //   this.productos = matchingProducto
  // }

  // selectProducto(producto:any){
  //   this.idProducto = String(producto.id);

  //   console.log(producto.id);
    
  //   this.descripcionProducto = String(producto.descripcion);

  //   this.productoSelect = producto;
  //   console.log(this.productoSelect?.descripcion);
  //   this.FormDetalleEgresos.patchValue({
  //     producto: [
  //       this.productoSelect?.descripcion 
  //     ],
  //   });

  //   this.formData.append('productoId', producto.id);

  //   this.JSONEGRS = { ...this.JSONEGRS, productoId:  this.formData.get('productoId') };

  //   this.showModal = false
  // }
 

 

 



  
  // enviarModalD(){

  // console.log(this.FormDetalleEgresos.value);
  
  // var frccId:any = localStorage.getItem('id_fraccionamiento');


 
  // this.formData.append('cantidad',this.FormDetalleEgresos.value.cantidad);
  // this.formData.append('descripcion',this.FormDetalleEgresos.value.descripcion);
  // this.formData.append('precioUnitario',this.FormDetalleEgresos.value.precio_unitario);
  // this.formData.append('fraccionamientoId',frccId);
  // // this.formData.append('egresoId',this.id);
 

  // console.log(this.formData.get('egresoId'));
  // console.log(this.formData.get('productoId'));
  

  // this.JSONEGRS = {
  //   ...this.JSONEGRS,
  //   cantidad: this.formData.get('cantidad'),
  //   descripcion: this.formData.get('descripcion'),
  //   precioUnitario:this.formData.get('precioUnitario'),
  //   fraccionamientoId: this.formData.get('fraccionamientoId'),
  //   egresoId: this.formData.get('egresoId')
  // }

  
  // // this.egresoSrvice.updateDetalleEgreso(this.id,this.detalleEgresoDatos.producto.id,this.JSONEGRS).subscribe( (r)=>{
  // //   console.log(r);
    
  // // })
  // }

  // manejarDatoP(dato: any) {
  //   this.productoSelect = dato;
  //   console.log(this.productoSelect?.nombre);
  //   this.FormDetalleEgresos.patchValue({
  //     producto: [
  //       this.productoSelect?.descripcion +
  //         ' ' +
  //         this.productoSelect?.identificador_interno,
  //     ],
  //   });

  //   this.formData.append('producto', dato.id);
  // }
  // envModalP() {
  //   var divModlP = document.getElementById('id0P') as HTMLDivElement;
  //   divModlP.style.display = 'none';
  // }
}
