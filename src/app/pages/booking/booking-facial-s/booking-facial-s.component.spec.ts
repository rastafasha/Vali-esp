import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialSComponent } from './booking-facial-s.component';

describe('BookingFacialSComponent', () => {
  let component: BookingFacialSComponent;
  let fixture: ComponentFixture<BookingFacialSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
