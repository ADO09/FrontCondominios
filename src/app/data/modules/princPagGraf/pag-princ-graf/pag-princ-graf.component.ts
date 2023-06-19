import { Component } from '@angular/core';
import { GraficasService } from 'src/app/data/services/api/graficas/graficas.service';

@Component({
  selector: 'app-pag-princ-graf',
  templateUrl: './pag-princ-graf.component.html',
  styleUrls: ['./pag-princ-graf.component.css']
})
export class PagPrincGrafComponent {
 
  view: [number,number] = [700, 400];

  public graf1:any[] = [];
  public graf2:any[] = [];
  public idFraccionamientoUsuer: any;

  public datosGenerales:any;


   single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7800000
    },
 
  ];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private grafServices:GraficasService) {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
  


   
    //Object.assign(this, { single });


    // array.forEach(element => {
      
    // });
  }

  async ngOnInit() {
     var data = (await this.grafServices.getGraficasEgresosIngresosFraccionamiento(this.idFraccionamientoUsuer).toPromise()) as any;
     this.datosGenerales = data.body;
     console.log(this.datosGenerales.totaPorPagar);
    this.grafServices.getGraficasEgresosIngresosFraccionamiento(this.idFraccionamientoUsuer).subscribe((data:any)=>{
      console.log(data);
    
      data.body.egresos.forEach((element: any) => {
       
       this.graf1.push({ name: element.tipo_pago  ,value: element.monto_total });
      
      });
 
    
      
    
     
     //  data.body.ingresos.forEach((element: any) => {
       
     //   //console.log('1');
       
     //  });
 
 
      this.graf1 = this.graf1.reduce((accumulator: any[], current: any) => {
       // Verificar si el elemento actual ya existe en el acumulador
       const existingElement = accumulator.find((item: any) => item.name === current.name);
     
       // Si el elemento actual no existe en el acumulador, agregarlo con su valor inicial
       if (!existingElement) {
         accumulator.push({
           name: current.name,
           value: current.value
         });
       } else {
         // Si el elemento actual ya existe en el acumulador, sumar su valor al existente
         existingElement.value += current.value;
       }
     
       return accumulator;
     }, []);
 
   
     
     console.log(this.graf1);

 
    data.body.ingresos.forEach((element: any) => {
       
      this.graf2.push({ name: element.configuracion_id  ,value: element.monto });
     
      console.log('1');
      
     });

    
     
    //  data.body.ingresos.forEach((element: any) => {
      
    //   //console.log('1');
      
    //  });


     this.graf2 = this.graf2.reduce((accumulator: any[], current: any) => {
      // Verificar si el elemento actual ya existe en el acumulador
      const existingElement = accumulator.find((item: any) => item.name === current.name);
    
      // Si el elemento actual no existe en el acumulador, agregarlo con su valor inicial
      if (!existingElement) {
        accumulator.push({
          name: current.name,
          value: current.value
        });
      } else {
        // Si el elemento actual ya existe en el acumulador, sumar su valor al existente
        existingElement.value += current.value;
      }
    
      return accumulator;
    }, []);

  
    
    console.log(this.graf2);

   //  this.formattedGraf1 = this.graf1.map((element: any) => {
   //   return {
   //     name: element.name,
   //     value: element.value.toLocaleString(), // Formatea el valor utilizando toLocaleString()
   //   };
   // });
   
    })
   
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
