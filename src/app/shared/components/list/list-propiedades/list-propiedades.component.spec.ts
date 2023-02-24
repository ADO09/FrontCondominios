import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropiedadesComponent } from './list-propiedades.component';

describe('ListPropiedadesComponent', () => {
  let component: ListPropiedadesComponent;
  let fixture: ComponentFixture<ListPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropiedadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
