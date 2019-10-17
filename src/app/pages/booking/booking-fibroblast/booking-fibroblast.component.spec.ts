import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFibroblastComponent } from './booking-fibroblast.component';

describe('BookingFibroblastComponent', () => {
  let component: BookingFibroblastComponent;
  let fixture: ComponentFixture<BookingFibroblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFibroblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFibroblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
