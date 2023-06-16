import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesComponent } from './home-features.component';

describe('HomeFeaturesComponent', () => {
  let component: HomeFeaturesComponent;
  let fixture: ComponentFixture<HomeFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFeaturesComponent]
    });
    fixture = TestBed.createComponent(HomeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
