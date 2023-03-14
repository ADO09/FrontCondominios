import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPropietariosComponent } from './reg-propietarios.component';

describe('RegPropietariosComponent', () => {
  let component: RegPropietariosComponent;
  let fixture: ComponentFixture<RegPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
