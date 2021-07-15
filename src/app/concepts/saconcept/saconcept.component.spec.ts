import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaconceptComponent } from './saconcept.component';

describe('SaconceptComponent', () => {
  let component: SaconceptComponent;
  let fixture: ComponentFixture<SaconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
