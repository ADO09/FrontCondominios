import { TestBed } from '@angular/core/testing';

import { HistorialBalanceService } from './historial-balance.service';

describe('HistorialBalanceService', () => {
  let service: HistorialBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
