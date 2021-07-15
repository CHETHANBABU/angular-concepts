import { TestBed } from '@angular/core/testing';

import { DomhandlerService } from './domhandler.service';

describe('DomhandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomhandlerService = TestBed.get(DomhandlerService);
    expect(service).toBeTruthy();
  });
});
