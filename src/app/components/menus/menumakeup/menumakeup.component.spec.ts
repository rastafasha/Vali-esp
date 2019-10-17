import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumakeupComponent } from './menumakeup.component';

describe('MenumakeupComponent', () => {
  let component: MenumakeupComponent;
  let fixture: ComponentFixture<MenumakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenumakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
