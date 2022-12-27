import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ContextMenuActionModel} from "../context-menu/context-menu-action.model";
import {JobModel} from "../../models/presentation-layer/job.model";

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsTableComponent {
  @Input() jobs: Array<JobModel> | null = [];
  @Input() actions: Array<ContextMenuActionModel<JobModel>> = [];
  displayedColumns = ['name', 'status', 'assignedUser', 'actions'];
}
