import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydisplyComponent } from './salarydisply.component';

describe('SalarydisplyComponent', () => {
  let component: SalarydisplyComponent;
  let fixture: ComponentFixture<SalarydisplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarydisplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarydisplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
