import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuotasConfIngrsPagosComponent } from './list-cuotas-conf-ingrs-pagos.component';

describe('ListCuotasConfIngrsPagosComponent', () => {
  let component: ListCuotasConfIngrsPagosComponent;
  let fixture: ComponentFixture<ListCuotasConfIngrsPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuotasConfIngrsPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCuotasConfIngrsPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
