import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupLModalComponent } from './makeup-l-modal.component';

describe('MakeupLModalComponent', () => {
  let component: MakeupLModalComponent;
  let fixture: ComponentFixture<MakeupLModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupLModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupLModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
