import { TestBed } from '@angular/core/testing';

import { EducationserviceService } from './educationservice.service';

describe('EducationserviceService', () => {
  let service: EducationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
