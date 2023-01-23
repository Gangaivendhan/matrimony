import { TestBed } from '@angular/core/testing';

import { RasiStarService } from './rasi-star.service';

describe('RasiStarService', () => {
  let service: RasiStarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RasiStarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
