import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubodyComponent } from './menubody.component';

describe('MenubodyComponent', () => {
  let component: MenubodyComponent;
  let fixture: ComponentFixture<MenubodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
