import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialAModalComponent } from './facial-a-modal.component';

describe('FacialAModalComponent', () => {
  let component: FacialAModalComponent;
  let fixture: ComponentFixture<FacialAModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialAModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialAModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
