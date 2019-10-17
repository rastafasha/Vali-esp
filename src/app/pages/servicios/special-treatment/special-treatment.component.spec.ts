import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTreatmentComponent } from './special-treatment.component';

describe('SpecialTreatmentComponent', () => {
  let component: SpecialTreatmentComponent;
  let fixture: ComponentFixture<SpecialTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
