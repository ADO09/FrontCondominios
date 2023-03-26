import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPeticionesComponent } from './loading-peticiones.component';

describe('LoadingPeticionesComponent', () => {
  let component: LoadingPeticionesComponent;
  let fixture: ComponentFixture<LoadingPeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingPeticionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
