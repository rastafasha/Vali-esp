import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroblastFaceComponent } from './fibroblast-face.component';

describe('FibroblastFaceComponent', () => {
  let component: FibroblastFaceComponent;
  let fixture: ComponentFixture<FibroblastFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibroblastFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibroblastFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
