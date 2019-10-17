import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMakeupBComponent } from './booking-makeup-b.component';

describe('BookingMakeupBComponent', () => {
  let component: BookingMakeupBComponent;
  let fixture: ComponentFixture<BookingMakeupBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingMakeupBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMakeupBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
