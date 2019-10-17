import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubookingBodyComponent } from './menubooking-body.component';

describe('MenubookingBodyComponent', () => {
  let component: MenubookingBodyComponent;
  let fixture: ComponentFixture<MenubookingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubookingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubookingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
