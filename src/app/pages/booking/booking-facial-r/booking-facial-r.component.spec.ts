import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialRComponent } from './booking-facial-r.component';

describe('BookingFacialRComponent', () => {
  let component: BookingFacialRComponent;
  let fixture: ComponentFixture<BookingFacialRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
