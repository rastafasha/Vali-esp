import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFibroblastBComponent } from './booking-fibroblast-b.component';

describe('BookingFibroblastBComponent', () => {
  let component: BookingFibroblastBComponent;
  let fixture: ComponentFixture<BookingFibroblastBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFibroblastBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFibroblastBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
