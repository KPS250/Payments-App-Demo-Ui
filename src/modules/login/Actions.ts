import {ActionTypes} from './ActionTypes';

export const setLogout = (payload: any) => ({
  type: ActionTypes.setLogout,
  payload: payload,
});

export const setSession = (payload: any) => ({
  type: ActionTypes.setSession,
  payload: payload,
});
