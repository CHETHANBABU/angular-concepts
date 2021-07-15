import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeconceptComponent } from './pipeconcept.component';

describe('PipeconceptComponent', () => {
  let component: PipeconceptComponent;
  let fixture: ComponentFixture<PipeconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
