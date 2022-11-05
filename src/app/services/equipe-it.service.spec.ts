import { TestBed } from '@angular/core/testing';

import { EquipeItService } from './equipe-it.service';

describe('EquipeItService', () => {
  let service: EquipeItService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeItService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
