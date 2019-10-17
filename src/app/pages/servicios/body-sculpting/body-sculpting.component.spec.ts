import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySculptingComponent } from './body-sculpting.component';

describe('BodySculptingComponent', () => {
  let component: BodySculptingComponent;
  let fixture: ComponentFixture<BodySculptingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySculptingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySculptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
