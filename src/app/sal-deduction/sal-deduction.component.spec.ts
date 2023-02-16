import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalDeductionComponent } from './sal-deduction.component';

describe('SalDeductionComponent', () => {
  let component: SalDeductionComponent;
  let fixture: ComponentFixture<SalDeductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalDeductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
