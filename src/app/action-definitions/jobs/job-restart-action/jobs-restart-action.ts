import {Injectable} from '@angular/core';
import {ActionDefinition} from "../../action-definition";
import {JobsService} from "../../../servies/jobs.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable, tap} from "rxjs";
import {ActionDefinitionContextMenu} from "../../action-definition-context-menu";
import {JobStatusEnum} from "../../../models/data-layer/job-status.enum";
import {JobRestartActionParams} from "./job-restart-action-params";

@Injectable({
  providedIn: 'root'
})
export class JobsRestartAction extends ActionDefinition<JobRestartActionParams> {

  constructor(
    private jobsService: JobsService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  invoke(params: JobRestartActionParams): any | Observable<any> {
    return this.jobsService.setStatus(params.jobId, JobStatusEnum.NEW)
      .pipe(
        tap(() => this.snackBar.open(`Job restarted successfully.`))
      )
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Restart',
      icon: 'repeat'
    }
  }
}
