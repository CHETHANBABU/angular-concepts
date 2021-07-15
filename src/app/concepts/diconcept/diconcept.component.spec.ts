import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiconceptComponent } from './diconcept.component';

describe('DiconceptComponent', () => {
  let component: DiconceptComponent;
  let fixture: ComponentFixture<DiconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
