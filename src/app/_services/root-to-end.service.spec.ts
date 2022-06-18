import { TestBed } from '@angular/core/testing';

import { RootToEndService } from './root-to-end.service';

describe('RootToEndService', () => {
  let service: RootToEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootToEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
