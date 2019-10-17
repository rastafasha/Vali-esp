import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialBrighteningComponent } from './facial-brightening.component';

describe('FacialBrighteningComponent', () => {
  let component: FacialBrighteningComponent;
  let fixture: ComponentFixture<FacialBrighteningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialBrighteningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialBrighteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
