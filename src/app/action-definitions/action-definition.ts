import {ContextMenuActionModel} from "../shared/context-menu/context-menu-action.model";
import {isObservable, Observable, take} from "rxjs";
import {BuildConfig} from "./build-config";
import {ActionDefinitionContextMenu} from "./action-definition-context-menu";

export abstract class ActionDefinition<Params> {

  build<Actor>(config: BuildConfig<Actor, Params>): ContextMenuActionModel<Actor> {
    const menu = this.getMenu();

    return {
      name: menu.name,
      icon: menu.icon,
      isHidden: actor => !!config.isHidden?.(actor),
      action: actor => {
        const result = this.invoke(config.resolveParams(actor));
        if (isObservable(result)) {
          result
            .pipe(take(1))
        } else {
          config.onSuccess?.();
        }
      },
    };
  }

  abstract invoke(params: Params): void | Observable<void>;
  protected abstract getMenu(): ActionDefinitionContextMenu;
}
