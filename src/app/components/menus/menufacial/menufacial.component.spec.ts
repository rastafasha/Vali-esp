import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufacialComponent } from './menufacial.component';

describe('MenufacialComponent', () => {
  let component: MenufacialComponent;
  let fixture: ComponentFixture<MenufacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenufacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
