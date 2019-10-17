import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBodyHComponent } from './booking-body-h.component';

describe('BookingBodyHComponent', () => {
  let component: BookingBodyHComponent;
  let fixture: ComponentFixture<BookingBodyHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingBodyHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingBodyHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
