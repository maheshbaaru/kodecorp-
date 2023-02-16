import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedleavesComponent } from './appliedleaves.component';

describe('AppliedleavesComponent', () => {
  let component: AppliedleavesComponent;
  let fixture: ComponentFixture<AppliedleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
