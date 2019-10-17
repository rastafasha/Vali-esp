import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFibroblastFComponent } from './booking-fibroblast-f.component';

describe('BookingFibroblastFComponent', () => {
  let component: BookingFibroblastFComponent;
  let fixture: ComponentFixture<BookingFibroblastFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFibroblastFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFibroblastFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
