import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecibosInquilinoComponent } from './list-recibos-inquilino.component';

describe('ListRecibosInquilinoComponent', () => {
  let component: ListRecibosInquilinoComponent;
  let fixture: ComponentFixture<ListRecibosInquilinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecibosInquilinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRecibosInquilinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
