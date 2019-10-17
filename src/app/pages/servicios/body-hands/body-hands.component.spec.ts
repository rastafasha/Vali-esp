import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHandsComponent } from './body-hands.component';

describe('BodyHandsComponent', () => {
  let component: BodyHandsComponent;
  let fixture: ComponentFixture<BodyHandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyHandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
