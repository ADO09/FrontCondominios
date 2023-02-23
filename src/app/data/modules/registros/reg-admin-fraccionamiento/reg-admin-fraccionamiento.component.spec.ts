import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAdminFraccionamientoComponent } from './reg-admin-fraccionamiento.component';

describe('RegAdminFraccionamientoComponent', () => {
  let component: RegAdminFraccionamientoComponent;
  let fixture: ComponentFixture<RegAdminFraccionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegAdminFraccionamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegAdminFraccionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
