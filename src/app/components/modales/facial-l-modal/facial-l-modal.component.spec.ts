import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialLModalComponent } from './facial-l-modal.component';

describe('FacialLModalComponent', () => {
  let component: FacialLModalComponent;
  let fixture: ComponentFixture<FacialLModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialLModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialLModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
