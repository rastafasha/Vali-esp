import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaxinfoComponent } from './waxinfo.component';

describe('WaxinfoComponent', () => {
  let component: WaxinfoComponent;
  let fixture: ComponentFixture<WaxinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaxinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaxinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
