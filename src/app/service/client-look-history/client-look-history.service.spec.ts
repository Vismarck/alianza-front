import { TestBed } from '@angular/core/testing';

import { ClientLookHistoryService } from './client-look-history.service';

describe('ClientLookHistoryService', () => {
  let service: ClientLookHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientLookHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
