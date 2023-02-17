import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypasswordComponent } from './modifypassword.component';

describe('ModifypasswordComponent', () => {
  let component: ModifypasswordComponent;
  let fixture: ComponentFixture<ModifypasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifypasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
