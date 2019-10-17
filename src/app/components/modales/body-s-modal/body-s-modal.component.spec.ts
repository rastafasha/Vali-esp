import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySModalComponent } from './body-s-modal.component';

describe('BodySModalComponent', () => {
  let component: BodySModalComponent;
  let fixture: ComponentFixture<BodySModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
