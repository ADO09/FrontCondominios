import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListRecibosComponent } from './modal-list-recibos.component';

describe('ModalListRecibosComponent', () => {
  let component: ModalListRecibosComponent;
  let fixture: ComponentFixture<ModalListRecibosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListRecibosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
