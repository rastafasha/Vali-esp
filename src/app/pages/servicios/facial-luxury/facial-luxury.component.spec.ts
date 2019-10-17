import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialLuxuryComponent } from './facial-luxury.component';

describe('FacialLuxuryComponent', () => {
  let component: FacialLuxuryComponent;
  let fixture: ComponentFixture<FacialLuxuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialLuxuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialLuxuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
