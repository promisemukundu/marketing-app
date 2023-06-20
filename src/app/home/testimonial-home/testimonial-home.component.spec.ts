import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialHomeComponent } from './testimonial-home.component';

describe('TestimonialHomeComponent', () => {
  let component: TestimonialHomeComponent;
  let fixture: ComponentFixture<TestimonialHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialHomeComponent]
    });
    fixture = TestBed.createComponent(TestimonialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
