import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-reg-egreso',
  templateUrl: './reg-egreso.component.html',
  styleUrls: ['./reg-egreso.component.css']
})
export class RegEgresoComponent {
  public selectedFile: File | undefined;
  public  pdfUrl: any;
  public FormEgresos!: FormGroup;
  public FormTipoEgreso!:FormGroup;
  public tiposEgresos!:any;
  public FormElejido!:any;
  public formData = new FormData();
  public JSONDATOSTIPOEGRESO:any;
  public datos:any = {}
  showModal = false
  productoTemp:any[]=[]
  proveedores:any[]=[]
  idProveedor: string | undefined;
  correoProveedor: string | undefined;
  public proveedorSelect: any | null = null;
  previewFile() {
    window.open(this.pdfUrl, '_blank');
  }
  constructor(private proveedoresService:ProveedoresService, private route:Router, private egresosService:EgresosService,private formBuilder:FormBuilder,private fb: FormBuilder,private productoService:ProductosService,private egresoSrvice:EgresosService,private sharedTitleService:SharedTitleComponentService){

    sharedTitleService.emitChange("Registrar Egreso")
    this.FormTipoEgreso = this.formBuilder.group({
      descripcion: ['', Validators.required],
      proveedor:['',Validators.required]
    });

    this.FormEgresos = this.formBuilder.group({
      // id: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      comprobanteUrl: ['', Validators.required],
      montoTotal: ['', Validators.required],
      isVerified: ['', Validators.required],
      tipoEgreso:['', Validators.required] ,
      tipoPago: ['', Validators.required],
      fechaPago:['', Validators.required] ,
      proveedorId:['', Validators.required] ,
      // estatusEgreso:['', Validators.required] ,
      // TipoEgresoEstatus:['', Validators.required]
      // detalleEgreso: ['', Validators.required]
    });
   }
  

 async ngOnInit(){

    var data  = (await this.proveedoresService.getAll().toPromise()) as any;
    this.proveedores = data.body

    console.log(this.proveedores);
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

  enviarModalTE(){
     this.JSONDATOSTIPOEGRESO = {
      ...this.JSONDATOSTIPOEGRESO,
      descripcion:this.FormTipoEgreso.value.descripcion,
      status:1,
      fraccionamientoId:localStorage.getItem('id_fraccionamiento')
    }

    this.egresosService.postTipoEgreso(this.JSONDATOSTIPOEGRESO).subscribe((r) =>{
      console.log(r);
      
    });
  }

  enviarModal(){

    const formValues = this.FormEgresos.value;


    const fraccionamientoId:any = localStorage.getItem('id_fraccionamiento') ;
    this.formData.append('descripcion', formValues.descripcion);
    this.formData.append('montoTotal', formValues.montoTotal);
    this.formData.append('isVerified', formValues.isVerified);
    this.formData.append('tipoEgreso', formValues.tipoEgreso);
    this.formData.append('fechaPago', formValues.fechaPago);
    this.formData.append('tipoPago', formValues.tipoPago);
    // this.formData.append('estatusEgresoId', formValues.estatusEgreso);
    this.formData.append('fraccionamientoId', fraccionamientoId);


    this.egresosService.postEgreso(this.formData).subscribe( (r)=>{
      console.log(r);

      if (r.icon == 'success') {
        this.route.navigateByUrl('/dashboard/' + INTERNAL_ROUTES.MODULO_EGRESOS);
      }
      
    })
  }

  searchProveedorEgrs(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.proveedores = matchingProducto
  }

  selectProveedorEgrs(proveedor:any){
    
  }



  searchProveedor(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.proveedores = matchingProducto
  }

  selectProveedor(proveedor:any){

    console.log(this.FormElejido);
    
    if (this.FormElejido =='FTE') {
      console.log('1');
      
      this.idProveedor = String(proveedor.id);

      console.log(proveedor.id);
      
      this.correoProveedor = String(proveedor.correoContacto);
  
      this.proveedorSelect = proveedor;
      console.log(this.proveedorSelect?.correoContacto);
      this.FormTipoEgreso.patchValue({
        proveedor: [
          this.proveedorSelect?.correoContacto 
        ],
      });
  
      // this.formData.append('productoId', producto.id);
  
      this.JSONDATOSTIPOEGRESO = { ...this.JSONDATOSTIPOEGRESO, proveedorId:  proveedor.id };
  
      this.showModal = false
    } else if(this.FormElejido =='FE'){
      console.log('2');
      
      this.idProveedor = String(proveedor.id);

    console.log(proveedor.id);
    
    this.correoProveedor = String(proveedor.correoContacto);

    this.proveedorSelect = proveedor;
    console.log(this.proveedorSelect?.correoContacto);
    this.FormEgresos.patchValue({
      proveedorId: [
        this.proveedorSelect?.correoContacto 
      ],
    });

    // this.formData.append('productoId', producto.id);

    this.formData.append('proveedorId', proveedor.id);
    this.showModal = false
    }
  
  }


  tipoEgresoSeleccionado(select:any){
   
    const selectedIndex = select.selectedIndex;
  const selectedObject:any = this.tiposEgresos[selectedIndex];
  console.log(selectedObject.proveedorDefault);

  if (selectedObject.proveedorDefault) {
    console.log('aisudhashudiu');
    
    this.idProveedor = String(selectedObject.proveedorDefault.id);

    console.log(selectedObject.proveedorDefault.id);
    
    this.correoProveedor = String(selectedObject.proveedorDefault.correoContacto);

    this.proveedorSelect = selectedObject.proveedorDefault;
    console.log(this.proveedorSelect?.correoContacto);
    this.FormEgresos.patchValue({
      proveedorId: [
        this.proveedorSelect?.correoContacto 
      ],
    });

    // this.formData.append('productoId', producto.id);

    this.formData.append('proveedorId', selectedObject.proveedorDefault.id);
    // this.showModal = false
  }else{
   
    //console.log(this.proveedorSelect?.correoContacto);
    this.FormEgresos.patchValue({
      proveedorId: 
        null ,
    });
  }
  }
}
