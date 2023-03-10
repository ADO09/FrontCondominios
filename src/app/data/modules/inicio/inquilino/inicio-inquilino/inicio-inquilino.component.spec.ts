import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInquilinoComponent } from './inicio-inquilino.component';

describe('InicioInquilinoComponent', () => {
  let component: InicioInquilinoComponent;
  let fixture: ComponentFixture<InicioInquilinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioInquilinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioInquilinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
