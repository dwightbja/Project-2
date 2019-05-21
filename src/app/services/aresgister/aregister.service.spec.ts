import { TestBed } from '@angular/core/testing';

import { AregisterService } from './aregister.service';

describe('AregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AregisterService = TestBed.get(AregisterService);
    expect(service).toBeTruthy();
  });
});
