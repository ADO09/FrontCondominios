import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetallesEgresosComponent } from './list-detalles-egresos.component';

describe('ListDetallesEgresosComponent', () => {
  let component: ListDetallesEgresosComponent;
  let fixture: ComponentFixture<ListDetallesEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetallesEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDetallesEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
