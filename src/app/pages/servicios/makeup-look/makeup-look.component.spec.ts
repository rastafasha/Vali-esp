import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupLookComponent } from './makeup-look.component';

describe('MakeupLookComponent', () => {
  let component: MakeupLookComponent;
  let fixture: ComponentFixture<MakeupLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
