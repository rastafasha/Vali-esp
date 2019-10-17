import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroblastHypertrophicComponent } from './fibroblast-hypertrophic.component';

describe('FibroblastHypertrophicComponent', () => {
  let component: FibroblastHypertrophicComponent;
  let fixture: ComponentFixture<FibroblastHypertrophicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibroblastHypertrophicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibroblastHypertrophicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
