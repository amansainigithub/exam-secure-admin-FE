import { TestBed } from '@angular/core/testing';

import { BottomCategoryService } from './bottom-category.service';

describe('BottomCategoryService', () => {
  let service: BottomCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
