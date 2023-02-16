import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySlipComponent } from './pay-slip.component';

describe('PaySlipComponent', () => {
  let component: PaySlipComponent;
  let fixture: ComponentFixture<PaySlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySlipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
