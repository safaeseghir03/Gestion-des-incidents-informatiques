import { TestBed } from '@angular/core/testing';

import { NatureTService } from './nature-t.service';

describe('NatureTService', () => {
  let service: NatureTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
