import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobUserAssignDialogComponent } from './job-user-assign-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    JobUserAssignDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class JobUserAssignDialogModule { }
