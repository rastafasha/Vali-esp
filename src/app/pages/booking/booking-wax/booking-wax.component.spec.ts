import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingWaxComponent } from './booking-wax.component';

describe('BookingWaxComponent', () => {
  let component: BookingWaxComponent;
  let fixture: ComponentFixture<BookingWaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingWaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingWaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
