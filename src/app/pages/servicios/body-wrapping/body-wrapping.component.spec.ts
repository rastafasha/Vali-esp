import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyWrappingComponent } from './body-wrapping.component';

describe('BodyWrappingComponent', () => {
  let component: BodyWrappingComponent;
  let fixture: ComponentFixture<BodyWrappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyWrappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyWrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
