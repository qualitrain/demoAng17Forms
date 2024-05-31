import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplDriven03Component } from './form-templ-driven03.component';

describe('FormTemplDriven03Component', () => {
  let component: FormTemplDriven03Component;
  let fixture: ComponentFixture<FormTemplDriven03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplDriven03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTemplDriven03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
