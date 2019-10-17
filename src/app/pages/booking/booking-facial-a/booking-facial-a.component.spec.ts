import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacialAComponent } from './booking-facial-a.component';

describe('BookingFacialAComponent', () => {
  let component: BookingFacialAComponent;
  let fixture: ComponentFixture<BookingFacialAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFacialAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacialAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
