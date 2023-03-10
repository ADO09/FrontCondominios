import { Component, OnInit } from '@angular/core';
import { recibo } from 'src/app/data/interfaces/recibo';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';

@Component({
  selector: 'app-inicio-inquilino',
  templateUrl: './inicio-inquilino.component.html',
  styleUrls: ['./inicio-inquilino.component.css']
})
export class InicioInquilinoComponent implements OnInit{
  selectedOption!: string;
  tipoUsuario:any;
  options = [
    {label: 'Opción 1', value: 'opcion1'},
    {label: 'Opción 2', value: 'opcion2'},
    {label: 'Opción 3', value: 'opcion3'}
  ];
  

  constructor(private apiService:InquilinosService) {

  }  
  lista = [
{
  id: '01',
  monto: 5500,
  Fecha_Pago: '06-03-2023',
  Fecha_Vencimiento: '06-07-2023',
  Estado: 'Pagado',
  Comprobante: 'img.png',
  Inquilino_Id: '01'
}
  ];

  ngOnInit(){



  } 

  cambiarLista(): any{
    //AQUI VA EL SERVICIO QUE TRAE LA LISTA DE RECIBOS SEGUN EL INQULINO SELECCIONADO EN EL SELECT
  }


  abrirModal(): any {

    
    var divModl =  document.getElementById('id02') as HTMLDivElement;
    divModl.style.display = 'block';
  }
  closeModal() {
    const modal = document.getElementById('id02');
  if (modal) {
    modal.style.display = 'none';
  }
  }

  envModal(){
    
   var divModl =  document.getElementById('id02') as HTMLDivElement;
   divModl.style.display = 'none';

  }
}
