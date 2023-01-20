import { TestBed } from '@angular/core/testing';

import { AnnualIncomeService } from './annual-income.service';

describe('AnnualIncomeService', () => {
  let service: AnnualIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
