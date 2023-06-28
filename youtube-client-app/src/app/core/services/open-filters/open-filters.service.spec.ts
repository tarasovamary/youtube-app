import { TestBed } from '@angular/core/testing';

import { OpenFiltersService } from './open-filters.service';

describe('OpenFiltersService', () => {
  let service: OpenFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
