import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialCComponent } from './booking-facial-c.component';

describe('BookingFacialCComponent', () => {
  let component: BookingFacialCComponent;
  let fixture: ComponentFixture<BookingFacialCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
