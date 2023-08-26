import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertyComponent } from './featured-property.component';

describe('FeaturedPropertyComponent', () => {
  let component: FeaturedPropertyComponent;
  let fixture: ComponentFixture<FeaturedPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedPropertyComponent]
    });
    fixture = TestBed.createComponent(FeaturedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
