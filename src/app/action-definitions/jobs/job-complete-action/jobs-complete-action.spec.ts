import { TestBed } from '@angular/core/testing';

import { JobCompleteAction } from './job-complete-action';

describe('JobsCompleteActionService', () => {
  let service: JobCompleteAction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCompleteAction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
