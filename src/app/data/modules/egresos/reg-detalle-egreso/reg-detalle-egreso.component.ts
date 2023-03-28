import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-reg-detalle-egreso',
  templateUrl: './reg-detalle-egreso.component.html',
  styleUrls: ['./reg-detalle-egreso.component.css']
})
export class RegDetalleEgresoComponent {

  public FormDetalleEgresos!: FormGroup;
 
  public id:any;
  public formData = new FormData();

 
  constructor( private sharedTitleService: SharedTitleComponentService, private route:Router, private routerA:ActivatedRoute, private egresosService:EgresosService,private formBuilder:FormBuilder,private fb: FormBuilder,private productoService:ProductosService,private egresoSrvice:EgresosService){

    
    sharedTitleService.emitChange('Registrar Detalle egreso');
    this.FormDetalleEgresos = this.fb.group({
     cantidad: ['', Validators.required],
     descripcion: ['', Validators.required],
     precio_unitario: ['', Validators.required],
     producto: ['', Validators.required]
   });

   this.id = +this.routerA.snapshot.params['id_egreso'];
   }
 
  showModal = false
  productoTemp:any[]=[]
  productos:any[]=[]
  idProducto: string | undefined;
  descripcionProducto: string | undefined;
  public productoSelect: any | null = null;
  public JSONEGRS:any;
  public productoData!: any[];
 
  
  async ngOnInit(){

    var data  = (await this.productoService.GetProductosQPFraccionamiento(localStorage.getItem('id_fraccionamiento')).toPromise()) as any;
    this.productos = data.body

    console.log(this.productos);
    
    this.productoTemp =data.body
    
   
 
  }

 
  enviarModal(){



    this.formData.append('cantidad', this.FormDetalleEgresos.value.cantidad);
    this.formData.append('descripcion', this.FormDetalleEgresos.value.descripcion);
    this.formData.append('precio_unitario', this.FormDetalleEgresos.value.precio_unitario);

    this.JSONEGRS = { ...this.JSONEGRS, 
      cantidad:  this.formData.get('cantidad'),
      descripcion:  this.formData.get('descripcion'),
      precioUnitario:  this.formData.get('precio_unitario'),
      fraccionamientoId: localStorage.getItem('id_fraccionamiento'),
      egresoId: this.id
  };


  this.egresosService.postDetalleEgreso(this.JSONEGRS).subscribe((r)=>{
    console.log(r);
    


    if (r.icon == "success") {
      setTimeout(() => {
        this.route.navigateByUrl('/dashboard/'+INTERNAL_ROUTES.MODULO_GESTIONEGRESO + this.id)
        }, 200);
     
    }
  })
    
  }
  searchPropiedad(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.productos = matchingProducto
  }

  selectProducto(producto:any){
    this.idProducto = String(producto.id);

    console.log(producto.id);
    
    this.descripcionProducto = String(producto.descripcion);

    this.productoSelect = producto;
    console.log(this.productoSelect?.descripcion);
    this.FormDetalleEgresos.patchValue({
      producto: [
        this.productoSelect?.descripcion 
      ],
    });

    this.formData.append('productoId', producto.id);

    this.JSONEGRS = { ...this.JSONEGRS, productoId:  this.formData.get('productoId') };

    this.showModal = false
  }
 

 

 



  
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
  

  // // this.JSONEGRS = {
  // //   ...this.JSONEGRS,
  // //   cantidad: this.formData.get('cantidad'),
  // //   descripcion: this.formData.get('descripcion'),
  // //   precioUnitario:this.formData.get('precioUnitario'),
  // //   fraccionamientoId: this.formData.get('fraccionamientoId'),
  // //   egresoId: this.formData.get('egresoId')
  // // }

  
 
  // }

  manejarDatoP(dato: any) {
    this.productoSelect = dato;
    console.log(this.productoSelect?.nombre);
    this.FormDetalleEgresos.patchValue({
      producto: [
        this.productoSelect?.descripcion +
          ' ' +
          this.productoSelect?.identificador_interno,
      ],
    });

    this.formData.append('producto', dato.id);
  }
  envModalP() {
    var divModlP = document.getElementById('id0P') as HTMLDivElement;
    divModlP.style.display = 'none';
  }


}
