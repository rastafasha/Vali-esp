import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMakeupLComponent } from './booking-makeup-l.component';

describe('BookingMakeupLComponent', () => {
  let component: BookingMakeupLComponent;
  let fixture: ComponentFixture<BookingMakeupLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingMakeupLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMakeupLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
