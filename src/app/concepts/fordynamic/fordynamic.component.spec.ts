import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FordynamicComponent } from './fordynamic.component';

describe('FordynamicComponent', () => {
  let component: FordynamicComponent;
  let fixture: ComponentFixture<FordynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FordynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
