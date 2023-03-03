import { Component, OnInit } from '@angular/core';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';

@Component({
  selector: 'app-propiedade',
  templateUrl: './propiedade.component.html',
  styleUrls: ['./propiedade.component.css']
})
export class PropiedadeComponent implements OnInit {

  constructor(private propiedadesService:PropiedadesServiceService) { }

  ngOnInit(): void {

    this.propiedadesService.propiedadesGetAll();
  }

}
