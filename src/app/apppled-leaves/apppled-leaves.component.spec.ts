import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppledLeavesComponent } from './apppled-leaves.component';

describe('ApppledLeavesComponent', () => {
  let component: ApppledLeavesComponent;
  let fixture: ComponentFixture<ApppledLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApppledLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApppledLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
