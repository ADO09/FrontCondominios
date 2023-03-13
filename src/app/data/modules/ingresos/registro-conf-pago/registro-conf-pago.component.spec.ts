import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConfPagoComponent } from './registro-conf-pago.component';

describe('RegistroConfPagoComponent', () => {
  let component: RegistroConfPagoComponent;
  let fixture: ComponentFixture<RegistroConfPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroConfPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroConfPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
