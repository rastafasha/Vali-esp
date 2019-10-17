import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialBModalComponent } from './facial-b-modal.component';

describe('FacialBModalComponent', () => {
  let component: FacialBModalComponent;
  let fixture: ComponentFixture<FacialBModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialBModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialBModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
