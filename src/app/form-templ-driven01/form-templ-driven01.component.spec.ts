import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplDriven01Component } from './form-templ-driven01.component';

describe('FormTemplDriven01Component', () => {
  let component: FormTemplDriven01Component;
  let fixture: ComponentFixture<FormTemplDriven01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplDriven01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTemplDriven01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
