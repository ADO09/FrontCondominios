import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadeComponent } from './propiedade.component';

describe('PropiedadeComponent', () => {
  let component: PropiedadeComponent;
  let fixture: ComponentFixture<PropiedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropiedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
