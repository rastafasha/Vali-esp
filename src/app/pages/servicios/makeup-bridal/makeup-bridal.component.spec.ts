import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupBridalComponent } from './makeup-bridal.component';

describe('MakeupBridalComponent', () => {
  let component: MakeupBridalComponent;
  let fixture: ComponentFixture<MakeupBridalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupBridalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupBridalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
