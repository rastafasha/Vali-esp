import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubookingFibroblastComponent } from './menubooking-fibroblast.component';

describe('MenubookingFibroblastComponent', () => {
  let component: MenubookingFibroblastComponent;
  let fixture: ComponentFixture<MenubookingFibroblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubookingFibroblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubookingFibroblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
