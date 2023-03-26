import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestionProductosComponent } from './modal-gestion-productos.component';

describe('ModalGestionProductosComponent', () => {
  let component: ModalGestionProductosComponent;
  let fixture: ComponentFixture<ModalGestionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestionProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
