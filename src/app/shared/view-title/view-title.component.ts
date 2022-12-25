import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.scss']
})
export class ViewTitleComponent {
  @Input() hasBackButton = false;
  @Input() viewTitle = 'No title';
  @Input() subtitle = 'No subtitle';
}
