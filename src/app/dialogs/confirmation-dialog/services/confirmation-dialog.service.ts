import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogDataModel} from "../models/confirmation-dialog-data.model";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../confirmation-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private matDialog: MatDialog) { }

  open(data: ConfirmationDialogDataModel): Observable<boolean> {
    return this.matDialog.open(ConfirmationDialogComponent, {
      data,
    }).afterClosed();
  }
}
