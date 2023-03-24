import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionDetalleEgresosComponent } from './modal-gestion-detalle-egresos.component';

describe('ModalGestionDetalleEgresosComponent', () => {
  let component: ModalGestionDetalleEgresosComponent;
  let fixture: ComponentFixture<ModalGestionDetalleEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestionDetalleEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestionDetalleEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
