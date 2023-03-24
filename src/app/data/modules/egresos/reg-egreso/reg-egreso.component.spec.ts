import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEgresoComponent } from './reg-egreso.component';

describe('RegEgresoComponent', () => {
  let component: RegEgresoComponent;
  let fixture: ComponentFixture<RegEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegEgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
