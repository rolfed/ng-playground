import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {JobUserAssignDialogPresentationModel} from "./models/job-user-assign-dialog-presentation.model";
import {UsersService} from "../../servies/users.service";
import {JobsService} from "../../servies/jobs.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobUserAssignDialogDataModel} from "./models/job-user-assign-dialog-data.model";
import {switchMap, take, tap} from 'rxjs';
import {UserModel} from "../../models/presentation-layer/user.model";

@Component({
  selector: 'app-job-user-assign-dialog',
  templateUrl: './job-user-assign-dialog.component.html',
  styleUrls: ['./job-user-assign-dialog.component.scss']
})
export class JobUserAssignDialogComponent {
  selectUserFG: FormGroup = new FormGroup<JobUserAssignDialogPresentationModel>({
    userId: new FormControl()
  });
  availableUsers$ = this.usersService.readList$()
    .pipe(
      take(1),
      tap(availableUsers => {
        this.selectUserFG.get('userId')?.setValue(availableUsers[0].id);
        this.changeDetectionRef.markForCheck();
      })
  );

  constructor(
    private usersService: UsersService,
    private jobsService: JobsService,
    private changeDetectionRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private dialogData: JobUserAssignDialogDataModel,
    private dialogRef: MatDialogRef<JobUserAssignDialogComponent>
  ) {}

  submit(): void {
    const closeUserDialogById$ = this.availableUsers$.pipe(
      tap(users => this.dialogRef.close(this.getUserById(users, this.selectUserFG.value.userId)))
    );

    this.jobsService.setUser(this.dialogData.jobId, this.selectUserFG.value.userId)
      .pipe(switchMap(() => closeUserDialogById$)).subscribe();
  }


  private getUserById(users: Array<UserModel>, userId: string): UserModel | undefined {
    return users.find(user => user.id === userId);
  }
}
