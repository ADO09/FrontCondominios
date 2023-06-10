import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TarjetasRfdiService } from 'src/app/data/services/api/tarjetas-rfdi/tarjetas-rfdi.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { animacionSearch } from 'src/app/shared/exports/animacionInputSearch';

@Component({
  selector: 'app-tarjetas-rfdi',
  templateUrl: './tarjetas-rfdi.component.html',
  styleUrls: ['./tarjetas-rfdi.component.css']
})
export class TarjetasRfdiComponent implements OnInit{
  fraccionamientoId: any;
  listaTarjetas: any[] = [];
  listaPropiedades: any[] = [];
  formRFDI: any;
  RFDI_Individual: any;
  tipoBoton: any;
  putRFDI: any;

 // selectValueIsinquilino:string = "0"     //aqui

  //aqui los temporales de busqueda
    tarjetaTemp:any[]=[]  ;    
    listaTarjetasTemp:any[]=[];

    // vehiculosTemp:any[]=[]
    tiposRfdi: any[] = [];
 

  selectValueTipoRfdi:string = "0"
 // selectValuePropiedad:string = "0"
  constructor(private sharedTitleService:SharedTitleComponentService, private apiService:TarjetasRfdiService,
    private fb: FormBuilder){
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de tarjetas RFDI")
  }
  
  
  ngOnInit(): void {
    this.apiService.getTarjetas(this.fraccionamientoId).subscribe((response)=>{
      this.listaTarjetas = response.body;
      this.listaTarjetasTemp =  response.body;
      console.log(this.listaTarjetas);
    });
    this.apiService.getPropiedades(this.fraccionamientoId).subscribe((response)=>{
      this.listaPropiedades = response.body;
      console.log(this.listaPropiedades);
    });

    this.formRFDI = this.fb.group({
      tipo: ['', Validators.required],
      rfdi: ['', Validators.required],
      propiedadId: ['', Validators.required],
      fraccionamientoId: ['', Validators.required],
      estatus: ['',Validators.required]
    });
  }

  enviarDatosAlModal(rfdi:any) {
    this.tipoBoton = 'put';
    this.putRFDI = rfdi;
    //aqui solo se carga la informacion del renglon seleccionado en el modal
    this.apiService.getRFDI(rfdi).subscribe((recibos:any)=>{
      this.RFDI_Individual = recibos.body;
      console.log(this.RFDI_Individual);
      this.formRFDI = this.fb.group({
        tipo: this.RFDI_Individual[0].tipo,
        rfdi: this.RFDI_Individual[0].rfdi,
        propiedadId: this.RFDI_Individual[0].propiedadId.id,
        fraccionamientoId: this.RFDI_Individual[0].fraccionamientoId,
        estatus: this.RFDI_Individual[0].estatus,
      });
    });
  }




  cambiarRFDI(){

    if(this.tipoBoton === 'post'){
      const payload = {
        rfdi: this.formRFDI.get('rfdi')?.value,
        tipo: this.formRFDI.get('tipo')?.value,
        propiedadId: this.formRFDI.get('propiedadId')?.value,
        fraccionamientoId: this.fraccionamientoId,
        estatus: this.formRFDI.get('estatus')?.value,
      }
  
      this.apiService.postRFDI(payload).subscribe((response)=>{
        console.log(response);
      });
    }else if (this.tipoBoton === 'put'){
      const payload = {
        tipo: this.formRFDI.get('tipo')?.value,
        propiedadId: this.formRFDI.get('propiedadId')?.value,
        estatus: this.formRFDI.get('estatus')?.value,
      }
      console.log(payload);
      this.apiService.putRFDI(this.putRFDI, payload).subscribe((response)=>{
        console.log(response);
      });
    }

    setTimeout(() => {
      this.apiService.getTarjetas(this.fraccionamientoId).subscribe((response)=>{
        this.listaTarjetas = response.body;
        console.log(this.listaTarjetas);
      });
    }, 2000);

  }

  nuevoRFDI(){
    this.tipoBoton = 'post';
    this.formRFDI = this.fb.group({
      tipo: '',
      rfdi: '',
      propiedadId: '',
      fraccionamientoId: '',
    });
  }


  onSelectChangeTipoRfdi(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectValueTipoRfdi = selectedValue
    console.log('Valor seleccionado:', selectedValue);

    this.getAllFilters()
   }


  getAllFilters(){
    let valuesSelectTipoRfdi = '';
    //let valuesSelectPropiedad = '';
    if(this.selectValueTipoRfdi != '-1')valuesSelectTipoRfdi = this.selectValueTipoRfdi

    //if(this.selectValuePropiedad != '0')valuesSelectPropiedad = this.selectValuePropiedad


    this.apiService.getAllFiltersTipoRfdi(this.fraccionamientoId,valuesSelectTipoRfdi).subscribe((data:any)=>{

      this.listaTarjetas = data.body;
      this.listaTarjetasTemp =  data.body;
    })
   }

  animacionSearch(){

    animacionSearch.animacionSearch()
    /*
    const containerSearch = document.querySelector('.container-search') as HTMLInputElement
    containerSearch.style.width = '100%'
    const cerrarInputSearch = document.querySelector('.cerrarInputSearch') as HTMLAnchorElement
    cerrarInputSearch.style.display = "block"

    const inputSearch = document.querySelector('#inputSearch')  as HTMLInputElement
    inputSearch.style.width = '100%';
    inputSearch.style.borderBottomColor = 'var(--ColorSecundario)'

    
      const containerFiltros = document.querySelectorAll('.filtro')

      containerFiltros.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.display = 'none';
        }
      });*/
   }

   cerrarAnimacioneSearch(){
    animacionSearch.cerrarAnimacioneSearch()
    animacionSearch.executeAfterTimeout()
    /*
    const cerrarInputSearch = document.querySelector('.cerrarInputSearch') as HTMLAnchorElement
    cerrarInputSearch.style.display = "none"
    const containerSearch = document.querySelector('.container-search') as HTMLInputElement
    containerSearch.style.width = 'auto'

    const inputSearch = document.querySelector('#inputSearch')  as HTMLInputElement
    inputSearch.style.width = '0';
    inputSearch.style.borderBottomColor = 'var(--ColorPrincipal)'

    this.executeAfterTimeout()
     */
     
   }


  searchPropietario(search:any ,event:any){

    // if (this.tarjetaTemp.length != 0) {
      //console.log(this.tarjetaTemp.length);
      console.log("no hay");
      
      const matchingPropiedades = this.listaTarjetasTemp.filter((u:any) => 
      u.propiedadId.propietario.nombre.toLowerCase().includes(search.toLowerCase()) || 
      u.propiedadId.propietario.correo.toLowerCase().includes(search.toLowerCase()));
      this.listaTarjetas = matchingPropiedades
      // } 
      // else {
      //   console.log("si hay");
        
      //   const matchingPropiedades = this.listaTarjetasTemp.filter((u:any) => 
      //   u.propiedadId.propietario.nombre.toLowerCase().includes(search.toLowerCase()) || 
      //   u.propiedadId.propietario.correo.toLowerCase().includes(search.toLowerCase()));
      //   this.listaTarjetas = matchingPropiedades
      // }

   
    //console.log(matchingUsers);

   


  }

}
