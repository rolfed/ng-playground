import { Injectable } from '@angular/core';
import {ActionDefinition} from "../../action-definition";
import {JobUnassignActionParam} from "./job-unassign-action-param";
import {filter, Observable, switchMap, tap} from "rxjs";
import {ActionDefinitionContextMenu} from "../../action-definition-context-menu";
import {JobsService} from "../../../servies/jobs.service";
import {ConfirmationDialogService} from "../../../dialogs/confirmation-dialog/services/confirmation-dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class JobUnassignAction extends ActionDefinition<JobUnassignActionParam>{
  constructor(
    private jobsService: JobsService,
    private confirmationDialogService: ConfirmationDialogService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  invoke(params: JobUnassignActionParam): any | Observable<any> {
    return this.confirmationDialogService
      .open({
        title: `Unassign ${params.currentUserName}?`,
        content: `You are going to unassign ${params.currentUserName} from this Job, are you completely sure?`,
      })
      .pipe(
        filter(Boolean),
        switchMap(() => this.confirmationDialogService.open({
          title: 'Are you 100% sure?',
          content: 'There is no way back!',
          cancelButtonText: 'Take me back',
          confirmButtonText: 'YES!'
        })),
        filter(Boolean),
        switchMap(() => this.jobsService.setUser(params.jobId, undefined)),
        tap(() => this.snackBar.open('User unassigned successfully'))
      );
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Unassign',
      icon: 'voice_over_off'
    };
  }

}
