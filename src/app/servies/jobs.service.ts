import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of, tap, throwError} from "rxjs";
import {UsersService} from "./users.service";
import {JobModel} from "../models/presentation-layer/job.model";
import {JobStatusEnum} from "../models/data-layer/job-status.enum";
import {JobDataModel} from "../models/data-layer/job-data.model";
import {mockJobsData} from "./mock/jobs-data.mock";

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private readonly jobsSource$ = new BehaviorSubject<Array<JobDataModel>>([]);

  constructor(private usersService: UsersService) {
    this.jobsSource$.next(mockJobsData);
  }

  readList$(): Observable<Array<JobModel>>  {
    return this.jobsSource$
      .pipe(
        map(jobs => jobs.map(job => ({
            id: job.id,
            name: job.name,
            status: job.status,
            assignedUser: job.assignedUserId ? this.usersService.read(job.assignedUserId) : undefined,
          })),
        )
      );
  }

  setUser(jobId: string, userId?: string): Observable<void> {
    console.log('TEST: ', jobId, userId);

    return this.findJob(jobId)
      .pipe(
        tap(job => {
          job.assignedUserId = userId;
         this.reloadData();
        }),
        map(() => undefined)
      )
  }

  setStatus(jobId: string, status: JobStatusEnum): Observable<void> {
    return this.findJob(jobId)
      .pipe(
        tap(job => {
          job.status = status;
          this.reloadData();
        }),
        map(() => undefined)
      )
  }

  reloadData() {
    this.jobsSource$.next([...this.jobsSource$.value]);
  }

  private findJob(jobId: string): Observable<JobDataModel> {
    const foundJob = this.jobsSource$.value.find(job => job.id === jobId);

    if (!foundJob) {
      return throwError(() => 'Job not found');
    }

    return of(foundJob);
  }
}
