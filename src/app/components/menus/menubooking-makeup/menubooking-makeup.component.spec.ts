import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubookingMakeupComponent } from './menubooking-makeup.component';

describe('MenubookingMakeupComponent', () => {
  let component: MenubookingMakeupComponent;
  let fixture: ComponentFixture<MenubookingMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubookingMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubookingMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
