import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesApprovelComponent } from './leaves-approvel.component';

describe('LeavesApprovelComponent', () => {
  let component: LeavesApprovelComponent;
  let fixture: ComponentFixture<LeavesApprovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesApprovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavesApprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
