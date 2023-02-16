import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDetailsComponent } from './salary-details.component';

describe('SalaryDetailsComponent', () => {
  let component: SalaryDetailsComponent;
  let fixture: ComponentFixture<SalaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
