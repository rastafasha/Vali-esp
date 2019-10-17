import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubookingFacialComponent } from './menubooking-facial.component';

describe('MenubookingFacialComponent', () => {
  let component: MenubookingFacialComponent;
  let fixture: ComponentFixture<MenubookingFacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubookingFacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubookingFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
