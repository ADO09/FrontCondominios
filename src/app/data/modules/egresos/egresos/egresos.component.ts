import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import {Egreso} from 'src/app/data/interfaces/egresos'
import { Route, Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  showModal = false
  productoTemp:any[]=[]
  tipoEgresos:any[]=[]
  idTipoEgreso: string | undefined;
  // correoProveedor: string | undefined;
  public tipoEgresoSelect: any | null = null;

  page!:number;
  listaEgresos: any[] = [];
  fraccionamientoId:any;
  public EgresoSelect!:Egreso;
public FormEgresos!: FormGroup;
public ModuloGestionEgreso:any = INTERNAL_ROUTES.MODULO_GESTIONEGRESO;
  constructor(  private apiService:EgresosService,private sharedTitleService:SharedTitleComponentService,private formBuilder: FormBuilder,private route:Router ){
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de egresos")
  }

  async ngOnInit(){

    var data  = (await this.apiService.getTipoEgresoQPFraccionamiento(this.fraccionamientoId).toPromise()) as any;
    this.tipoEgresos = data.body

    console.log(this.tipoEgresos);
    
    this.FormEgresos = this.formBuilder.group({
      // id: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      comprobanteUrl: [''],
      montoTotal: ['', Validators.required],
      isVerified: ['', Validators.required],
      tipoEgreso:['', Validators.required] ,
      estatusEgreso:['', Validators.required] ,
      // detalleEgreso: ['', Validators.required]
    });
    this.apiService.getEgresos(this.fraccionamientoId).subscribe((recibos:any)=>{
      console.log(recibos);
      
      this.listaEgresos = recibos.body;
      console.log(this.listaEgresos);
    });

    
  }
  cerrarModal(){
    
    var divModl =  document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
 
   }


  //  ngOnChanges() {
  //   this.FormEgresos = this.formBuilder.group({
  //     // id: ['', Validators.required],
  //     // fraccionamientoId: ['', Validators.required],
  //     descripcion: ['', Validators.required],
  //     comprobanteUrl: ['', Validators.required],
  //     montoTotal: ['', Validators.required],
  //     isVerified: ['', Validators.required],
  //     tipoEgreso:['', Validators.required] ,
  //     estatusEgreso:['', Validators.required] ,
  //     // detalleEgreso: ['', Validators.required]
  //   });
  //  }

   enviarModal(){

   }

        
   GestionEgreso(egreso:any){
    // setTimeout(() => {
    //   var divModl = document.getElementById('id01') as HTMLDivElement;
    //   divModl.style.display = 'block';
    // }, 100);


   

   }


   
  
   searchTipoEgfreso(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.tipoEgresos = matchingProducto
  }

  envModal(){
    
    var divModl =  document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
 
   }

  selectTipoEgreso(tipoEgreso:any){
     
      this.idTipoEgreso = String(tipoEgreso.id);

    // console.log(proveedor.id);
    
    // this.correoProveedor = String(proveedor.correoContacto);

    this.tipoEgresoSelect = tipoEgreso;
    // console.log(this.proveedorSelect?.correoContacto);
    // this.FormEgresos.patchValue({
    //   proveedorId: [
    //     this.proveedorSelect?.correoContacto 
    //   ],
    // });
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);
    // this.formData.append('productoId', producto.id);

    // this.formData.append('proveedorId', proveedor.id);
     this.showModal = false
    
  
  }

  cambiarEstatus(idEgreso:any){
    const payload: any[] = [

    ]

    this.apiService.cambiarEstatus(this.fraccionamientoId, idEgreso, payload).subscribe((recibos:any)=>{
      this.listaEgresos = recibos.body;
      console.log(this.listaEgresos);
    });

  }
}
