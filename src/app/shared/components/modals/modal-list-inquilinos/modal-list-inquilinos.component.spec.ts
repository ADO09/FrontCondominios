import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListInquilinosComponent } from './modal-list-inquilinos.component';

describe('ModalListInquilinosComponent', () => {
  let component: ModalListInquilinosComponent;
  let fixture: ComponentFixture<ModalListInquilinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListInquilinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListInquilinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
