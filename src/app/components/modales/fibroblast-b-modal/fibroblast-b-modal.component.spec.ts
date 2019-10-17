import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibroblastBModalComponent } from './fibroblast-b-modal.component';

describe('FibroblastBModalComponent', () => {
  let component: FibroblastBModalComponent;
  let fixture: ComponentFixture<FibroblastBModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibroblastBModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibroblastBModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
