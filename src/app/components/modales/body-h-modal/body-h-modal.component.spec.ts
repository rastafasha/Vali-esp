import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyHModalComponent } from './body-h-modal.component';

describe('BodyHModalComponent', () => {
  let component: BodyHModalComponent;
  let fixture: ComponentFixture<BodyHModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyHModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyHModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
