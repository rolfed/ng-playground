import {Injectable} from "@angular/core";
import {ActionDefinition} from "../../action-definition";
import {JobAssignActionParams} from "./job-assign-action-params";
import {ActionDefinitionContextMenu} from "../../action-definition-context-menu";
import {Observable, tap} from "rxjs";
import {UserModel} from "../../../models/presentation-layer/user.model";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  JobUserAssignDialogDataModel
} from "../../../dialogs/job-user-assign-dialog/models/job-user-assign-dialog-data.model";
import {JobUserAssignDialogComponent} from "../../../dialogs/job-user-assign-dialog/job-user-assign-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class JobAssignAction extends ActionDefinition<JobAssignActionParams> {
  constructor(
    private dialogService: MatDialog,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  invoke(params: JobAssignActionParams): Observable<any> {
    const dialogData: JobUserAssignDialogDataModel = {
      jobId: params.jobId
    }

    return this.dialogService
      .open(JobUserAssignDialogComponent, {
        data: dialogData
      })
      .afterClosed()
      .pipe(
        tap((result: UserModel ) => {
          if (result) {
            this.snackBar.open(`${result.name} was successfully assigned to the job`);
          }
        }),
      );
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Assign to User',
      icon: 'how_to_reg'
    }
  }

}
