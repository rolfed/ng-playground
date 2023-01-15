import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ContextMenuActionModel} from "./context-menu-action.model";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent<T> {
  @Input() actions: Array<ContextMenuActionModel<T>> = [];
  @Input() actor!: T;
}
