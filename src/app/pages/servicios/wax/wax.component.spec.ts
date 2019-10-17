import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaxComponent } from './wax.component';

describe('WaxComponent', () => {
  let component: WaxComponent;
  let fixture: ComponentFixture<WaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
