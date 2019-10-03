import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { UserRoles } from './user-roles.model';

export enum UserRolesActionTypes {
  LoadUserRoless = '[UserRoles] Load UserRoless',
  AddUserRoles = '[UserRoles] Add UserRoles',
  UpsertUserRoles = '[UserRoles] Upsert UserRoles',
  AddUserRoless = '[UserRoles] Add UserRoless',
  UpsertUserRoless = '[UserRoles] Upsert UserRoless',
  UpdateUserRoles = '[UserRoles] Update UserRoles',
  UpdateUserRoless = '[UserRoles] Update UserRoless',
  DeleteUserRoles = '[UserRoles] Delete UserRoles',
  DeleteUserRoless = '[UserRoles] Delete UserRoless',
  ClearUserRoless = '[UserRoles] Clear UserRoless'
}

export class LoadUserRoless implements Action {
  readonly type = UserRolesActionTypes.LoadUserRoless;

  constructor(public payload: { userRoless: UserRoles[] }) {}
}

export class AddUserRoles implements Action {
  readonly type = UserRolesActionTypes.AddUserRoles;

  constructor(public payload: { userRoles: UserRoles }) {}
}

export class UpsertUserRoles implements Action {
  readonly type = UserRolesActionTypes.UpsertUserRoles;

  constructor(public payload: { userRoles: UserRoles }) {}
}

export class AddUserRoless implements Action {
  readonly type = UserRolesActionTypes.AddUserRoless;

  constructor(public payload: { userRoless: UserRoles[] }) {}
}

export class UpsertUserRoless implements Action {
  readonly type = UserRolesActionTypes.UpsertUserRoless;

  constructor(public payload: { userRoless: UserRoles[] }) {}
}

export class UpdateUserRoles implements Action {
  readonly type = UserRolesActionTypes.UpdateUserRoles;

  constructor(public payload: { userRoles: Update<UserRoles> }) {}
}

export class UpdateUserRoless implements Action {
  readonly type = UserRolesActionTypes.UpdateUserRoless;

  constructor(public payload: { userRoless: Update<UserRoles>[] }) {}
}

export class DeleteUserRoles implements Action {
  readonly type = UserRolesActionTypes.DeleteUserRoles;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserRoless implements Action {
  readonly type = UserRolesActionTypes.DeleteUserRoless;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserRoless implements Action {
  readonly type = UserRolesActionTypes.ClearUserRoless;
}

export type UserRolesActions =
  | LoadUserRoless
  | AddUserRoles
  | UpsertUserRoles
  | AddUserRoless
  | UpsertUserRoless
  | UpdateUserRoles
  | UpdateUserRoless
  | DeleteUserRoles
  | DeleteUserRoless
  | ClearUserRoless;
