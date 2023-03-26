import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegProductoComponent } from './modal-reg-producto.component';

describe('ModalRegProductoComponent', () => {
  let component: ModalRegProductoComponent;
  let fixture: ComponentFixture<ModalRegProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
