import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibrofacemodalComponent } from './fibrofacemodal.component';

describe('FibrofacemodalComponent', () => {
  let component: FibrofacemodalComponent;
  let fixture: ComponentFixture<FibrofacemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibrofacemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibrofacemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
