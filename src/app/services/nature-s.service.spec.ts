import { TestBed } from '@angular/core/testing';

import { NatureSService } from './nature-s.service';

describe('NatureSService', () => {
  let service: NatureSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
