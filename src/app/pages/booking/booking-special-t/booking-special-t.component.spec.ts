import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSpecialTComponent } from './booking-special-t.component';

describe('BookingSpecialTComponent', () => {
  let component: BookingSpecialTComponent;
  let fixture: ComponentFixture<BookingSpecialTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSpecialTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSpecialTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
