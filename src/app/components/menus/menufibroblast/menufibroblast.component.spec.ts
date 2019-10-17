import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufibroblastComponent } from './menufibroblast.component';

describe('MenufibroblastComponent', () => {
  let component: MenufibroblastComponent;
  let fixture: ComponentFixture<MenufibroblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenufibroblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufibroblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
