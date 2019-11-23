import { createAction, props } from '@ngrx/store';
import { IUser } from './user.state';

export const Login = createAction('[Login] Login',
  props<{ userName: string, password: string }>());

export const LoginSuccess = createAction('[Login Success] Login Success',
  props<{ user: IUser }>());

export const LoginFailure = createAction('[Login fail] Login Failure',
  props<{ error: string }>());
