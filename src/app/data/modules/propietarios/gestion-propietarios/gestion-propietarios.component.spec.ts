import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPropietariosComponent } from './gestion-propietarios.component';

describe('GestionPropietariosComponent', () => {
  let component: GestionPropietariosComponent;
  let fixture: ComponentFixture<GestionPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
