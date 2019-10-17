import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPermanentComponent } from './booking-permanent.component';

describe('BookingPermanentComponent', () => {
  let component: BookingPermanentComponent;
  let fixture: ComponentFixture<BookingPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
