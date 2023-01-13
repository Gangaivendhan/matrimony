import { TestBed } from '@angular/core/testing';

import { CasteserviceService } from './casteservice.service';

describe('CasteserviceService', () => {
  let service: CasteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
