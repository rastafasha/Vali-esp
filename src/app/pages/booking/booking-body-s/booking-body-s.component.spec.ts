import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBodySComponent } from './booking-body-s.component';

describe('BookingBodySComponent', () => {
  let component: BookingBodySComponent;
  let fixture: ComponentFixture<BookingBodySComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingBodySComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingBodySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
