import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalDeductionListComponent } from './sal-deduction-list.component';

describe('SalDeductionListComponent', () => {
  let component: SalDeductionListComponent;
  let fixture: ComponentFixture<SalDeductionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalDeductionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalDeductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
