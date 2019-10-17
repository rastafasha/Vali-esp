import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialAntiageComponent } from './facial-antiage.component';

describe('FacialAntiageComponent', () => {
  let component: FacialAntiageComponent;
  let fixture: ComponentFixture<FacialAntiageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialAntiageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialAntiageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
