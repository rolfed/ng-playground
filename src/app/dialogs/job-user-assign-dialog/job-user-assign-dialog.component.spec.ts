import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobUserAssignDialogComponent } from './job-user-assign-dialog.component';

describe('JobUserAssignDialogComponent', () => {
  let component: JobUserAssignDialogComponent;
  let fixture: ComponentFixture<JobUserAssignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobUserAssignDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobUserAssignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
