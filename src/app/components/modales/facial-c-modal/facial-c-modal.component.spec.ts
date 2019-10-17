import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialCModalComponent } from './facial-c-modal.component';

describe('FacialCModalComponent', () => {
  let component: FacialCModalComponent;
  let fixture: ComponentFixture<FacialCModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialCModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
