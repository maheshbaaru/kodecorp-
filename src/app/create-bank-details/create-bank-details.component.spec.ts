import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankDetailsComponent } from './create-bank-details.component';

describe('CreateBankDetailsComponent', () => {
  let component: CreateBankDetailsComponent;
  let fixture: ComponentFixture<CreateBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
