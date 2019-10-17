import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialModalComponent } from './special-modal.component';

describe('SpecialModalComponent', () => {
  let component: SpecialModalComponent;
  let fixture: ComponentFixture<SpecialModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
