import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosGeneralesComponent } from './recibos-generales.component';

describe('RecibosGeneralesComponent', () => {
  let component: RecibosGeneralesComponent;
  let fixture: ComponentFixture<RecibosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibosGeneralesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
