import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDetalleEgresoComponent } from './reg-detalle-egreso.component';

describe('RegDetalleEgresoComponent', () => {
  let component: RegDetalleEgresoComponent;
  let fixture: ComponentFixture<RegDetalleEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegDetalleEgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegDetalleEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
