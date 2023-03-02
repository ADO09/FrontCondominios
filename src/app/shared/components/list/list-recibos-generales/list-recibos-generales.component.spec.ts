import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecibosGeneralesComponent } from './list-recibos-generales.component';

describe('ListRecibosGeneralesComponent', () => {
  let component: ListRecibosGeneralesComponent;
  let fixture: ComponentFixture<ListRecibosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecibosGeneralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecibosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
