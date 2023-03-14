import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionPropietarioComponent } from './modal-gestion-propietario.component';

describe('ModalGestionPropietarioComponent', () => {
  let component: ModalGestionPropietarioComponent;
  let fixture: ComponentFixture<ModalGestionPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestionPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestionPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
