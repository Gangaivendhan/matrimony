import { TestBed } from '@angular/core/testing';

import { CurrencyserviceService } from './currencyservice.service';

describe('CurrencyserviceService', () => {
  let service: CurrencyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
