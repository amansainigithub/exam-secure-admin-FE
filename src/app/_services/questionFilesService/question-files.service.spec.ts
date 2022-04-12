import { TestBed } from '@angular/core/testing';

import { QuestionFilesService } from './question-files.service';

describe('QuestionFilesService', () => {
  let service: QuestionFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
