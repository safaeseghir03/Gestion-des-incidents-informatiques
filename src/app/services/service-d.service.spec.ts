import { TestBed } from '@angular/core/testing';

import { ServiceDService } from './service-d.service';

describe('ServiceDService', () => {
  let service: ServiceDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
