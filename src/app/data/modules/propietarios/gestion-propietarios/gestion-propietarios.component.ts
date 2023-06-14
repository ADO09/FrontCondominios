import { Component } from '@angular/core';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { animacionSearch } from 'src/app/shared/exports/animacionInputSearch';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { UpdateDataService } from 'src/app/data/services/update-data.service';

@Component({
  selector: 'app-gestion-propietarios',
  templateUrl: './gestion-propietarios.component.html',
  styleUrls: ['./gestion-propietarios.component.css']
})
export class GestionPropietariosComponent {
  public idFraccionamientoUsuer: any;
  public regPropietarioRoute: any;
  constructor(private propietariosService: PropietariosService, private sharedTitleService: SharedTitleComponentService, private updateDService: UpdateDataService) {
    sharedTitleService.emitChange("Gestion de Propietario")
    this.regPropietarioRoute = INTERNAL_ROUTES.MODULO_REG_PROPIETARIO;
    updateDService.changeEmitted$.subscribe((data) => {
      this.propietariosService.GetPropietariosQPFraccionamientoQPIsinquilino(this.idFraccionamientoUsuer).subscribe((r) => {

        this.propietariosData = r.body;

      });
    });

  }

  //aqui
  selectValueIsinquilino: string = "0"     //aqui

  //aqui los temporales de busqueda
  isInquilinoTemp: any[] = []

  public propietariosData!: any[];
  public propietariosDataTemp!: any[];
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.propietariosService.GetPropietariosQPFraccionamientoQPIsinquilino(this.idFraccionamientoUsuer).subscribe((r) => {

      this.propietariosData = r.body;
      this.propietariosDataTemp = r.body;
      console.log(r);
      console.log(this.propietariosData);

    });
  }


  // onSelectChangeTipoVehiculo(event: Event){
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectValueTipoVehiculo = selectedValue
  //   console.log('Valor seleccionado:', selectedValue);

  //   this.getAllFilters()


  //  }

  // async manejarEvento() {
  //    var data = (await this.propietariosService.GetPropietariosQPFraccionamientoQPIsinquilino(this.idFraccionamientoUsuer).toPromise()) as any;

  //   this.propietariosData = data;
  //   console.log('aqui esta completo LIUSAHDIOUASHDIUOASHDIOUASHIU');
  //   console.log(this.propietariosData);

  // }
  onSelectChangeisInquilino(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectValueIsinquilino = selectedValue
    console.log('Valor seleccionado:', selectedValue);

    this.getAllFilters()
  }

  getAllFilters() {

    let valuesSelectIsinquilino = '';


    if (this.selectValueIsinquilino != '-1') valuesSelectIsinquilino = this.selectValueIsinquilino


    this.propietariosService.getAllFilters(this.idFraccionamientoUsuer, valuesSelectIsinquilino).subscribe((data: any) => {

      this.propietariosData = data.body;
      this.isInquilinoTemp = data.body;
    })
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

  searchPropietario(search: any, event: any) {

    if (this.isInquilinoTemp.length != 0) {
      console.log(this.isInquilinoTemp.length);
      console.log("no hay");

      const matchingPropiedades = this.isInquilinoTemp.filter((u: any) =>
        u.correo.toLowerCase().includes(search.toLowerCase()) ||
        u.nombre.toLowerCase().includes(search.toLowerCase()));
      this.propietariosData = matchingPropiedades
    } else {
      console.log("si hay");

      const matchingPropiedades = this.propietariosDataTemp.filter((u: any) =>
        u.correo.toLowerCase().includes(search.toLowerCase()) ||
        u.nombre.toLowerCase().includes(search.toLowerCase()));
      this.propietariosData = matchingPropiedades
    }


    //console.log(matchingUsers);




  }












}
