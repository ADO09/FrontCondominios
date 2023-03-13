import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionConfPagoComponent } from './modal-gestion-conf-pago.component';

describe('ModalGestionConfPagoComponent', () => {
  let component: ModalGestionConfPagoComponent;
  let fixture: ComponentFixture<ModalGestionConfPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestionConfPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestionConfPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
