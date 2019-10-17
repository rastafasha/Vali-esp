import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentModalComponent } from './permanent-modal.component';

describe('PermanentModalComponent', () => {
  let component: PermanentModalComponent;
  let fixture: ComponentFixture<PermanentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
