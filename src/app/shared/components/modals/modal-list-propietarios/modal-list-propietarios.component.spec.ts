import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListPropietariosComponent } from './modal-list-propietarios.component';

describe('ModalListPropietariosComponent', () => {
  let component: ModalListPropietariosComponent;
  let fixture: ComponentFixture<ModalListPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
