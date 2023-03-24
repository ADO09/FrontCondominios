import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListProductosComponent } from './modal-list-productos.component';

describe('ModalListProductosComponent', () => {
  let component: ModalListProductosComponent;
  let fixture: ComponentFixture<ModalListProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
