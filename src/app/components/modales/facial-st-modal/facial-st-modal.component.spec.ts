import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialSTModalComponent } from './facial-st-modal.component';

describe('FacialSTModalComponent', () => {
  let component: FacialSTModalComponent;
  let fixture: ComponentFixture<FacialSTModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialSTModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialSTModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
