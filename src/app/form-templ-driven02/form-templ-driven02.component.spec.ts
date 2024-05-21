import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplDriven02Component } from './form-templ-driven02.component';

describe('FormTemplDriven02Component', () => {
  let component: FormTemplDriven02Component;
  let fixture: ComponentFixture<FormTemplDriven02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemplDriven02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTemplDriven02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
