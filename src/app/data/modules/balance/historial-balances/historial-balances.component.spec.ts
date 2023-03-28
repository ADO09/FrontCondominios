import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialBalancesComponent } from './historial-balances.component';

describe('HistorialBalancesComponent', () => {
  let component: HistorialBalancesComponent;
  let fixture: ComponentFixture<HistorialBalancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialBalancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
