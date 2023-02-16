import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSalaryDetailsComponent } from './create-new-salary-details.component';

describe('CreateNewSalaryDetailsComponent', () => {
  let component: CreateNewSalaryDetailsComponent;
  let fixture: ComponentFixture<CreateNewSalaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSalaryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewSalaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
