import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGestionPropietarioComponent } from './list-gestion-propietario.component';

describe('ListGestionPropietarioComponent', () => {
  let component: ListGestionPropietarioComponent;
  let fixture: ComponentFixture<ListGestionPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGestionPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGestionPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
