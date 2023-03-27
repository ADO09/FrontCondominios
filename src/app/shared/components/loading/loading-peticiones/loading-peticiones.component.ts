import { Component } from '@angular/core';
import { LoadingService } from 'src/app/data/services/api/loadingHttp.service';

@Component({
  selector: 'app-loading-peticiones',
  templateUrl: './loading-peticiones.component.html',
  styleUrls: ['./loading-peticiones.component.css']
})
export class LoadingPeticionesComponent {

  constructor(public loadingService:LoadingService){

  }

}
