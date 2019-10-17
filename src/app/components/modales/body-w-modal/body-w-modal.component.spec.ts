import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWModalComponent } from './body-w-modal.component';

describe('BodyWModalComponent', () => {
  let component: BodyWModalComponent;
  let fixture: ComponentFixture<BodyWModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyWModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyWModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
