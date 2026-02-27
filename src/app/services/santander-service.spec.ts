import { TestBed } from '@angular/core/testing';

import { SantanderService } from './santander-service';

describe('SantanderService', () => {
  let service: SantanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SantanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
