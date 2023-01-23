import { TestBed } from '@angular/core/testing';

import { MotherTongueserviceService } from './mother-tongueservice.service';

describe('MotherTongueserviceService', () => {
  let service: MotherTongueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherTongueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
