import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {mockUsersData} from "./mock/users-data.mock";
import {UserModel} from "../models/presentation-layer/user.model";
import {UserDataModel} from "../models/data-layer/user-data.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly userSource$ = new BehaviorSubject<Array<UserDataModel>>([]);

  constructor() {
    this.userSource$.next(mockUsersData);
  }

  readList$(): Observable<Array<UserModel>> {
    return this.userSource$
      .pipe(
        map(users => users.map((user) => ({
            id: user.id,
            name: user.name
          })),
        )
      );
  }

  read(userId: string): UserModel {
    const foundUser = this.userSource$.value.find(user => user.id === userId);

    if (!foundUser) {
      throw Error(`invalid user: ${userId}`);
    }

    return {
      id: foundUser.id,
      name: foundUser.name
    }

  }

}
