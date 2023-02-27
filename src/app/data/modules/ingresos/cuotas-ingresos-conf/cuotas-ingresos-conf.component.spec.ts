import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasIngresosConfComponent } from './cuotas-ingresos-conf.component';

describe('CuotasIngresosConfComponent', () => {
  let component: CuotasIngresosConfComponent;
  let fixture: ComponentFixture<CuotasIngresosConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotasIngresosConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuotasIngresosConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
