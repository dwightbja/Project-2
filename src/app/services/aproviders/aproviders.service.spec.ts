import { TestBed } from '@angular/core/testing';

import { AprovidersService } from './aproviders.service';

describe('AprovidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AprovidersService = TestBed.get(AprovidersService);
    expect(service).toBeTruthy();
  });
});
