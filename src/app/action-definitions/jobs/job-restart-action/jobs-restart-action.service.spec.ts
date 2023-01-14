import { TestBed } from '@angular/core/testing';

import { JobsRestartActionService } from './jobs-restart-action.service';

describe('JobsRestartActionService', () => {
  let service: JobsRestartActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsRestartActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
