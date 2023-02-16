import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxtypeComponent } from './create-taxtype.component';

describe('CreateTaxtypeComponent', () => {
  let component: CreateTaxtypeComponent;
  let fixture: ComponentFixture<CreateTaxtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaxtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTaxtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
