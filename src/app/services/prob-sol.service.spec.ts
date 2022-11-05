import { TestBed } from '@angular/core/testing';

import { ProbSolService } from './prob-sol.service';

describe('ProbSolService', () => {
  let service: ProbSolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbSolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
