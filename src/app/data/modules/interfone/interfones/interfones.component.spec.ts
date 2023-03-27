import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfonesComponent } from './interfones.component';

describe('InterfonesComponent', () => {
  let component: InterfonesComponent;
  let fixture: ComponentFixture<InterfonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
