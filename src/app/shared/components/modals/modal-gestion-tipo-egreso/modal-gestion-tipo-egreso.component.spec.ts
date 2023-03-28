import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionTipoEgresoComponent } from './modal-gestion-tipo-egreso.component';

describe('ModalGestionTipoEgresoComponent', () => {
  let component: ModalGestionTipoEgresoComponent;
  let fixture: ComponentFixture<ModalGestionTipoEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestionTipoEgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestionTipoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
