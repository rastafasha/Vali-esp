import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFibroblastHComponent } from './booking-fibroblast-h.component';

describe('BookingFibroblastHComponent', () => {
  let component: BookingFibroblastHComponent;
  let fixture: ComponentFixture<BookingFibroblastHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFibroblastHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFibroblastHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
