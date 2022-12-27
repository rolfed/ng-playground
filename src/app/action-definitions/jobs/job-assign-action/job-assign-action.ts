import {Injectable} from "@angular/core";
import {ActionDefinition} from "../../action-definition";
import {JobAssignActionParams} from "./job-assign-action-params";
import {ActionDefinitionContextMenu} from "../../action-definition-context-menu";
import {Observable, tap} from "rxjs";
import {UserModel} from "../../../models/presentation-layer/user.model";

@Injectable({
  providedIn: 'root'
})
export class JobAssignAction extends ActionDefinition<JobAssignActionParams> {
  constructor() {
    super();
  }

  invoke(params: JobAssignActionParams): void | Observable<void> {
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
