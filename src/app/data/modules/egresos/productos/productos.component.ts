import { Component } from '@angular/core';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { UpdateDataService } from 'src/app/data/services/update-data.service';
import { animacionSearch } from 'src/app/shared/exports/animacionInputSearch';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public idFraccionamientoUsuer: any;


  //aqui
  selectValueIdentInter: string = "0"     //aqui

  //aqui los temporales de busqueda
  identificadorInternoTemp: any[] = []

  constructor(private egresosService: EgresosService, private productosService: ProductosService, private sharedTitleService: SharedTitleComponentService,private updateDService:UpdateDataService) {

    sharedTitleService.emitChange("Gestion productos")
    updateDService.changeEmitted$.subscribe((data) => {
      this.productosService.GetProductosQPFraccionamiento(this.idFraccionamientoUsuer).subscribe((r) => {

        this.productosData = r.body;
        this.productosDataTemp = r.body;
       
  
      });
       });
  }

  public productosData!: any[];
  public productosDataTemp!: any[];
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.productosService.GetProductosQPFraccionamiento(this.idFraccionamientoUsuer).subscribe((r) => {

      this.productosData = r.body;
      this.productosDataTemp = r.body;
      console.log(r);
      console.log(this.productosData);

    });
  }


  abrirModalR(): any {

    setTimeout(() => {
      var divModl2 = document.getElementById('id02') as HTMLDivElement;
      divModl2.style.display = 'block';
    }, 100);
  }

  envModalR() {

    var divModl2 = document.getElementById('id02') as HTMLDivElement;
    divModl2.style.display = 'none';

  }






  onSelectChangeisInquilino(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectValueIdentInter = selectedValue
    console.log('Valor seleccionado:', selectedValue);

    this.getAllFilters()
  }

  getAllFilters() {

    let valueSelectIdentInterno = '';


    if (this.selectValueIdentInter != '-1') valueSelectIdentInterno = this.selectValueIdentInter


    // this.productosService.getAllFilters(valueSelectIdentInterno).subscribe((data:any)=>{

    //   this.productosData = data.body;
    //   this.productosDataTemp = data.body;
    // })
  }

  animacionSearch() {

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

  cerrarAnimacioneSearch() {
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

  /*
  executeAfterTimeout() {
   setTimeout(() => {
     // Tu lógica aquí
     const containerFiltros = document.querySelectorAll('.filtro')

     containerFiltros.forEach((element) => {
       if (element instanceof HTMLElement) {
         element.style.display = 'flex';
       }
     });
   }, 300); // 2000 ms = 2 segundos
 }*/

  searchProducto(search: any, event: any) {

    if (this.identificadorInternoTemp.length != 0) {
      console.log(this.identificadorInternoTemp.length);
      console.log("no hay");

      const matchingPropiedades = this.identificadorInternoTemp.filter((u: any) =>
        u.identificadorInterno.toLowerCase().includes(search.toLowerCase()) ||
        u.proveedor.nombre.toLowerCase().includes(search.toLowerCase()) ||
        u.proveedor.correoContacto.toLowerCase().includes(search.toLowerCase()) ||
        u.proveedor.nombreContacto.toLowerCase().includes(search.toLowerCase()));
      this.productosData = matchingPropiedades
    } else {
      console.log("si hay");

      const matchingPropiedades = this.productosDataTemp.filter((u: any) =>
        u.identificadorInterno.toLowerCase().includes(search.toLowerCase()) ||
        u.proveedor.nombre.toLowerCase().includes(search.toLowerCase()) ||
        u.proveedor.correoContacto.toLowerCase().includes(search.toLowerCase()) ||
        u.proveedor.nombreContacto.toLowerCase().includes(search.toLowerCase()));
      this.productosData = matchingPropiedades
    }


    //console.log(matchingUsers);




  }
}
