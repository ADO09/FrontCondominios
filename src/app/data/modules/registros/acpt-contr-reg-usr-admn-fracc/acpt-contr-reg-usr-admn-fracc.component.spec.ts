import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcptContrRegUsrAdmnFraccComponent } from './acpt-contr-reg-usr-admn-fracc.component';

describe('AcptContrRegUsrAdmnFraccComponent', () => {
  let component: AcptContrRegUsrAdmnFraccComponent;
  let fixture: ComponentFixture<AcptContrRegUsrAdmnFraccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcptContrRegUsrAdmnFraccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcptContrRegUsrAdmnFraccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
