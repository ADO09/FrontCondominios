import { TestBed } from '@angular/core/testing';

import { InterfonesService } from './interfones.service';

describe('InterfonesService', () => {
  let service: InterfonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
