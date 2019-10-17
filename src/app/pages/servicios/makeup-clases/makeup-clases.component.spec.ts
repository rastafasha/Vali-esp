import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupClasesComponent } from './makeup-clases.component';

describe('MakeupClasesComponent', () => {
  let component: MakeupClasesComponent;
  let fixture: ComponentFixture<MakeupClasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupClasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
