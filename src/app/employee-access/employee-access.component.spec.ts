import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccessComponent } from './employee-access.component';

describe('EmployeeAccessComponent', () => {
  let component: EmployeeAccessComponent;
  let fixture: ComponentFixture<EmployeeAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
