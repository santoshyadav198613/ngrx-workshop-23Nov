import {
  createReducer, on, Action,
  createFeatureSelector, createSelector
} from '@ngrx/store';
import { IUser } from './user.state';
import { LoginSuccess, LoginFailure } from './user.actions';


export interface UserState {
  user: IUser;
  error: string;
}

const initialeState: UserState = {
  user: null,
  error: ''
};

const userSelector = createFeatureSelector<UserState>('user');

export const profileSelector = createSelector(
  userSelector,
  state => state.user
);

export const errorSelector = createSelector(
  userSelector,
  state => state.error
);

export const userReducer = createReducer(
  initialeState,
  on(LoginSuccess, (state, props) => ({
    ...state,
    user: props.user,
    error: ''
  })),
  on(LoginFailure, (state, props) => ({
    ...state,
    error: props.error,
    user: null
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

