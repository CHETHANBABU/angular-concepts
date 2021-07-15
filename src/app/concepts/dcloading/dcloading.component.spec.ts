import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcloadingComponent } from './dcloading.component';

describe('DcloadingComponent', () => {
  let component: DcloadingComponent;
  let fixture: ComponentFixture<DcloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
