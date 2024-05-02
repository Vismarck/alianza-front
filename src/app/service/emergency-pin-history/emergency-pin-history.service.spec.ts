import { TestBed } from '@angular/core/testing';

import { EmergencyPinHistoryService } from './emergency-pin-history.service';

describe('EmergencyPinHistoryService', () => {
  let service: EmergencyPinHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencyPinHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
