import { TestBed } from '@angular/core/testing';

import { JobsCompleteActionService } from './jobs-complete-action.service';

describe('JobsCompleteActionService', () => {
  let service: JobsCompleteActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsCompleteActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
