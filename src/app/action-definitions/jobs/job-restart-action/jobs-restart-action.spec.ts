import { TestBed } from '@angular/core/testing';

import { JobsRestartAction } from './jobs-restart-action';

describe('JobsRestartActionService', () => {
  let service: JobsRestartAction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsRestartAction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
