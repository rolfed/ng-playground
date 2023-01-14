import { TestBed } from '@angular/core/testing';

import { JobStartActionService } from './job-start-action.service';

describe('JobStartActionService', () => {
  let service: JobStartActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobStartActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
