import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobUserAssignDialogModule } from "./dialogs/job-user-assign-dialog/job-user-assign-dialog.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmationDialogModule } from "./dialogs/confirmation-dialog/confirmation-dialog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    JobUserAssignDialogModule,
    ConfirmationDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
