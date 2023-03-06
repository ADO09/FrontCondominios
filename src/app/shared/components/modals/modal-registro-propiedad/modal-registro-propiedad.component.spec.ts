import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroPropiedadComponent } from './modal-registro-propiedad.component';

describe('ModalRegistroPropiedadComponent', () => {
  let component: ModalRegistroPropiedadComponent;
  let fixture: ComponentFixture<ModalRegistroPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistroPropiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistroPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
