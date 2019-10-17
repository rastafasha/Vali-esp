import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialBComponent } from './booking-facial-b.component';

describe('BookingFacialBComponent', () => {
  let component: BookingFacialBComponent;
  let fixture: ComponentFixture<BookingFacialBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
