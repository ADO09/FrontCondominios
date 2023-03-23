import { TestBed } from '@angular/core/testing';

import { TarjetasRfdiService } from './tarjetas-rfdi.service';

describe('TarjetasRfdiService', () => {
  let service: TarjetasRfdiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetasRfdiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
