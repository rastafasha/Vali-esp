import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaxmodalComponent } from './waxmodal.component';

describe('WaxmodalComponent', () => {
  let component: WaxmodalComponent;
  let fixture: ComponentFixture<WaxmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaxmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaxmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
