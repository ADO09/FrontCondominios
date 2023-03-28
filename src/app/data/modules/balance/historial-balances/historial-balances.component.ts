import { Component, OnInit } from '@angular/core';
import { HistorialBalanceService } from 'src/app/data/services/api/historial-balance/historial-balance.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-historial-balances',
  templateUrl: './historial-balances.component.html',
  styleUrls: ['./historial-balances.component.css']
})
export class HistorialBalancesComponent implements OnInit {
  fraccionamientoId: any;
  listaBalances: any[] = [];
  
  constructor(private apiService: HistorialBalanceService,
    private sharedTitleService:SharedTitleComponentService) {   
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Historial de balances");
  }

  ngOnInit(): void {
    this.apiService.getBalances(this.fraccionamientoId).subscribe((response)=>{
      this.listaBalances = response.body;
    });
  }

}
