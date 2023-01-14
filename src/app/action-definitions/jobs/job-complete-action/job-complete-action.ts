import {Injectable} from '@angular/core';
import {JobsService} from "../../../servies/jobs.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActionDefinition} from "../../action-definition";
import {JobCompleteActionParams} from "./job-complete-action-params";
import {ActionDefinitionContextMenu} from "../../action-definition-context-menu";
import {Observable, tap} from "rxjs";
import {JobStatusEnum} from "../../../models/data-layer/job-status.enum";

@Injectable({
  providedIn: 'root'
})
export class JobCompleteAction extends ActionDefinition<JobCompleteActionParams>{

  constructor(
    private jobsService: JobsService,
    private snackBar: MatSnackBar
  ) {
    super();
  }


  invoke(params: JobCompleteActionParams): Observable<any> {
    return this.jobsService.setStatus(params.jobId, JobStatusEnum.DONE)
      .pipe(
        tap(() => this.snackBar.open('Job successfully completed. You deserve a prize.'))
      )
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Complete',
      icon: 'done'
    }
  }

}
