import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import {ViewTitleModule} from "../../shared/view-title/view-title.module";
import {JobsTableModule} from "../../shared/jobs-table/jobs-table.module";


@NgModule({
  declarations: [
    JobsComponent
  ],
    imports: [
        CommonModule,
        JobsRoutingModule,
        ViewTitleModule,
        JobsTableModule
    ]
})
export class JobsModule { }
