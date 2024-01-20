import { TestBed } from '@angular/core/testing';

import { OppenheimerService } from './oppenheimer.service';

describe('OppenheimerService', () => {
  let service: OppenheimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OppenheimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
