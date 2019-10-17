import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMakeupComponent } from './booking-makeup.component';

describe('BookingMakeupComponent', () => {
  let component: BookingMakeupComponent;
  let fixture: ComponentFixture<BookingMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
