import { TestBed } from '@angular/core/testing';

import { JobUnassignAction } from './job-unassign-action';

describe('JobUnassignActionService', () => {
  let service: JobUnassignAction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobUnassignAction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
