import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListPropiedadesComponent } from './modal-list-propiedades.component';

describe('ModalListPropiedadesComponent', () => {
  let component: ModalListPropiedadesComponent;
  let fixture: ComponentFixture<ModalListPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListPropiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
