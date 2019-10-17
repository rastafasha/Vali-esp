import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBodyWComponent } from './booking-body-w.component';

describe('BookingBodyWComponent', () => {
  let component: BookingBodyWComponent;
  let fixture: ComponentFixture<BookingBodyWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingBodyWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingBodyWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
