import { TestBed } from '@angular/core/testing';

import { JobStartAction } from './job-start-action';

describe('JobStartActionService', () => {
  let service: JobStartAction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobStartAction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
