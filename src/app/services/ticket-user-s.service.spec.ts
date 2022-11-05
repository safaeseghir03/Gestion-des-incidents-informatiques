import { TestBed } from '@angular/core/testing';

import { TicketUserSService } from './ticket-user-s.service';

describe('TicketUserSService', () => {
  let service: TicketUserSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketUserSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
