import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialRestorativeComponent } from './facial-restorative.component';

describe('FacialRestorativeComponent', () => {
  let component: FacialRestorativeComponent;
  let fixture: ComponentFixture<FacialRestorativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialRestorativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialRestorativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
