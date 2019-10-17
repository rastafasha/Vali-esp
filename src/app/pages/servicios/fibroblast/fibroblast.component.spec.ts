import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroblastComponent } from './fibroblast.component';

describe('FibroblastComponent', () => {
  let component: FibroblastComponent;
  let fixture: ComponentFixture<FibroblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibroblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibroblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
