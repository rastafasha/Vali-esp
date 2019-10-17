import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialSpecialComponent } from './facial-special.component';

describe('FacialSpecialComponent', () => {
  let component: FacialSpecialComponent;
  let fixture: ComponentFixture<FacialSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
