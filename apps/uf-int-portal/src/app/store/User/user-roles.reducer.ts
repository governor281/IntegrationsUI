import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserRoles } from './user-roles.model';
import { UserRolesActions, UserRolesActionTypes } from './user-roles.actions';

export const userRolesesFeatureKey = 'userRoleses';

export interface State extends EntityState<UserRoles> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserRoles> = createEntityAdapter<UserRoles>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: UserRolesActions): State {
  switch (action.type) {
    case UserRolesActionTypes.AddUserRoles: {
      return adapter.addOne(action.payload.userRoles, state);
    }

    case UserRolesActionTypes.UpsertUserRoles: {
      return adapter.upsertOne(action.payload.userRoles, state);
    }

    case UserRolesActionTypes.AddUserRoless: {
      return adapter.addMany(action.payload.userRoless, state);
    }

    case UserRolesActionTypes.UpsertUserRoless: {
      return adapter.upsertMany(action.payload.userRoless, state);
    }

    case UserRolesActionTypes.UpdateUserRoles: {
      return adapter.updateOne(action.payload.userRoles, state);
    }

    case UserRolesActionTypes.UpdateUserRoless: {
      return adapter.updateMany(action.payload.userRoless, state);
    }

    case UserRolesActionTypes.DeleteUserRoles: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserRolesActionTypes.DeleteUserRoless: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserRolesActionTypes.LoadUserRoless: {
      return adapter.addAll(action.payload.userRoless, state);
    }

    case UserRolesActionTypes.ClearUserRoless: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
