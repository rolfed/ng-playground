import { TestBed } from '@angular/core/testing';

import { JobRestartAction } from './job-restart-action.service';

describe('JobsRestartActionService', () => {
  let service: JobRestartAction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobRestartAction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
