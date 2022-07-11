import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormErrorsComponent } from './app-form-errors.component';

describe('AppFormErrorsComponent', () => {
  let component: AppFormErrorsComponent;
  let fixture: ComponentFixture<AppFormErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
