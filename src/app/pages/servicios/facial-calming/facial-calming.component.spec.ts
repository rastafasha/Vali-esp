import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialCalmingComponent } from './facial-calming.component';

describe('FacialCalmingComponent', () => {
  let component: FacialCalmingComponent;
  let fixture: ComponentFixture<FacialCalmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialCalmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacialCalmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
