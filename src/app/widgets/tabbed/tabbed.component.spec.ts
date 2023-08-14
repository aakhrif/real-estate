import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedComponent } from './tabbed.component';

describe('TabbedComponent', () => {
  let component: TabbedComponent;
  let fixture: ComponentFixture<TabbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabbedComponent]
    });
    fixture = TestBed.createComponent(TabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
