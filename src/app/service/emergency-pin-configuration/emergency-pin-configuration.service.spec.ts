import { TestBed } from '@angular/core/testing';

import { EmergencyPinConfigurationService } from './emergency-pin-configuration.service';

describe('EmergencyPinConfigurationService', () => {
  let service: EmergencyPinConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencyPinConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
