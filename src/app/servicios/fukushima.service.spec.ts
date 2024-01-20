import { TestBed } from '@angular/core/testing';

import { FukushimaService } from './fukushima.service';

describe('FukushimaService', () => {
  let service: FukushimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FukushimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
