import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ContextMenuActionModel} from "../../shared/context-menu/context-menu-action.model";
import {JobModel} from "../../models/presentation-layer/job.model";
import {JobsService} from "../../servies/jobs.service";
import {defaultIfEmpty} from "rxjs";

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

  constructor(private readonly jobsService: JobsService) {
    this.jobsService.readList$().subscribe(console.log);
  }

}
