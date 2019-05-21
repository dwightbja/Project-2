import { TestBed } from '@angular/core/testing';

import { AloginService } from './alogin.service';

describe('AloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AloginService = TestBed.get(AloginService);
    expect(service).toBeTruthy();
  });
});
