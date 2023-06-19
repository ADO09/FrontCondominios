import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincGrafComponent } from './pag-princ-graf.component';

describe('PagPrincGrafComponent', () => {
  let component: PagPrincGrafComponent;
  let fixture: ComponentFixture<PagPrincGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPrincGrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
