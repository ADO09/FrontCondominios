import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEgresosComponent } from './gestion-egresos.component';

describe('GestionEgresosComponent', () => {
  let component: GestionEgresosComponent;
  let fixture: ComponentFixture<GestionEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEgresosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
