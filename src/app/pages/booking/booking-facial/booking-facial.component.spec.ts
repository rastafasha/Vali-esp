import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialComponent } from './booking-facial.component';

describe('BookingFacialComponent', () => {
  let component: BookingFacialComponent;
  let fixture: ComponentFixture<BookingFacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
