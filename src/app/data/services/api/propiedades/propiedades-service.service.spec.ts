import { TestBed } from '@angular/core/testing';

import { PropiedadesServiceService } from './propiedades-service.service';

describe('PropiedadesServiceService', () => {
  let service: PropiedadesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropiedadesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
