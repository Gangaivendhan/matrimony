import { TestBed } from '@angular/core/testing';

import { StarserviceService } from './starservice.service';

describe('StarserviceService', () => {
  let service: StarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
