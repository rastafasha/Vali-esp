import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupBModalComponent } from './makeup-b-modal.component';

describe('MakeupBModalComponent', () => {
  let component: MakeupBModalComponent;
  let fixture: ComponentFixture<MakeupBModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupBModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupBModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
