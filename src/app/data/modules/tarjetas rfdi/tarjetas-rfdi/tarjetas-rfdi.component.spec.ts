import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasRfdiComponent } from './tarjetas-rfdi.component';

describe('TarjetasRfdiComponent', () => {
  let component: TarjetasRfdiComponent;
  let fixture: ComponentFixture<TarjetasRfdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasRfdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasRfdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
