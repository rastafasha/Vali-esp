import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroblastHModalComponent } from './fibroblast-h-modal.component';

describe('FibroblastHModalComponent', () => {
  let component: FibroblastHModalComponent;
  let fixture: ComponentFixture<FibroblastHModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibroblastHModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibroblastHModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
