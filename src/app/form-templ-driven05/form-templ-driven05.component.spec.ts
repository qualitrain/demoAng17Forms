import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplDriven05Component } from './form-templ-driven05.component';

describe('FormTemplDriven05Component', () => {
  let component: FormTemplDriven05Component;
  let fixture: ComponentFixture<FormTemplDriven05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplDriven05Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTemplDriven05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
