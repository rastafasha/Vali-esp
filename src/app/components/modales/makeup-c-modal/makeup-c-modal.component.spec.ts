import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupCModalComponent } from './makeup-c-modal.component';

describe('MakeupCModalComponent', () => {
  let component: MakeupCModalComponent;
  let fixture: ComponentFixture<MakeupCModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupCModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
