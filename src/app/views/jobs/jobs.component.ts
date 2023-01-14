import {ChangeDetectionStrategy, Component, Injector} from '@angular/core';
import {ContextMenuActionModel} from "../../shared/context-menu/context-menu-action.model";
import {JobModel} from "../../models/presentation-layer/job.model";
import {JobsService} from "../../servies/jobs.service";
import {defaultIfEmpty} from "rxjs";
import {JobAssignAction} from "../../action-definitions/jobs/job-assign-action/job-assign-action";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent {
  jobs$ = this.jobsService.readList$().pipe(
    defaultIfEmpty([])
  );
  actions: Array<ContextMenuActionModel<JobModel>> = [];

  constructor(
    private readonly jobsService: JobsService,
    private injector: Injector
  ) {
    this.actions = this.buildActions();
  }

  private buildActions(): Array<ContextMenuActionModel<JobModel>> {
    return [
      this.injector.get(JobAssignAction).build({
        resolveParams: actor => ({ jobId: actor.id }),
        isHidden: actor => !!actor.assignedUser,
        onSuccess: () => this.jobsService.reloadData()
      }),
    ]
  }

}
