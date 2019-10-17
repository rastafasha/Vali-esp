import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroblastBodyComponent } from './fibroblast-body.component';

describe('FibroblastBodyComponent', () => {
  let component: FibroblastBodyComponent;
  let fixture: ComponentFixture<FibroblastBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibroblastBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibroblastBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
