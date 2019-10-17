import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMakeupCComponent } from './booking-makeup-c.component';

describe('BookingMakeupCComponent', () => {
  let component: BookingMakeupCComponent;
  let fixture: ComponentFixture<BookingMakeupCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingMakeupCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMakeupCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
