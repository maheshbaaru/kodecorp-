import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpasswordComponent } from './fpassword.component';

describe('FpasswordComponent', () => {
  let component: FpasswordComponent;
  let fixture: ComponentFixture<FpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
