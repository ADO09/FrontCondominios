import { Component, OnInit } from '@angular/core';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';

@Component({
  selector: 'app-propiedade',
  templateUrl: './propiedade.component.html',
  styleUrls: ['./propiedade.component.css']
})
export class PropiedadeComponent implements OnInit {

  constructor(private propiedadesService:PropiedadesServiceService) { }

  public propiedadesData!:any[];
  ngOnInit(): void {

    this.propiedadesService.propiedadesGetAll().subscribe( (r) => {

      this.propiedadesData = r.body;
      console.log(r);
      console.log(this.propiedadesData);
      
    });
  }

}
