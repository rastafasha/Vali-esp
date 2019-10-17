import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialRModalComponent } from './facial-r-modal.component';

describe('FacialRModalComponent', () => {
  let component: FacialRModalComponent;
  let fixture: ComponentFixture<FacialRModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialRModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialRModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
