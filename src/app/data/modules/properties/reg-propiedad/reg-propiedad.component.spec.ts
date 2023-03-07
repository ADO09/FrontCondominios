import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPropiedadComponent } from './reg-propiedad.component';

describe('RegPropiedadComponent', () => {
  let component: RegPropiedadComponent;
  let fixture: ComponentFixture<RegPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPropiedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
