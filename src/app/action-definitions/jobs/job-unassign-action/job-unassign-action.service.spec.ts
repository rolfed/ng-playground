import { TestBed } from '@angular/core/testing';

import { JobUnassignActionService } from './job-unassign-action.service';

describe('JobUnassignActionService', () => {
  let service: JobUnassignActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobUnassignActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
