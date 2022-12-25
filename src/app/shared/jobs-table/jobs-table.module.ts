import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsTableComponent } from './jobs-table.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    JobsTableComponent,
    JobStatusComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    JobsTableComponent
  ]
})
export class JobsTableModule { }
