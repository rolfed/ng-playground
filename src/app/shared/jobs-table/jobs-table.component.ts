import {Component, Input} from '@angular/core';
import {ContextMenuActionModel} from "../context-menu/context-menu-action.model";

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss']
})
export class JobsTableComponent {
  @Input() jobs: Array<JobModel> = [];
  @Input() actions: Array<ContextMenuActionModel<JobModel>> = [];

}
