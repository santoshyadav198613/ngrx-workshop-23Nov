import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { IUser } from './user.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './user.service';
import { Login, LoginSuccess, LoginFailure } from './user.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login),
      mergeMap(() => this.userService.login('test', 'test').pipe(
        map((user: IUser) => LoginSuccess({ user: user })),
        catchError((err) => of(LoginFailure({ error: err })))
      )
      )
    )
  );

}



