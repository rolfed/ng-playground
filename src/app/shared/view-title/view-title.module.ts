import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTitleComponent } from './view-title.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ViewTitleComponent
  ],
  exports: [
    ViewTitleComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class ViewTitleModule { }
