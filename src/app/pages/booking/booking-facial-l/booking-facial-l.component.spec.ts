import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialLComponent } from './booking-facial-l.component';

describe('BookingFacialLComponent', () => {
  let component: BookingFacialLComponent;
  let fixture: ComponentFixture<BookingFacialLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
