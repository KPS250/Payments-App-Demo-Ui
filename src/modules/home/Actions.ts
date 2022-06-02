import {ActionTypes} from './ActionTypes';

export const setSelectedHomeTab = (payload: number) => ({
  type: ActionTypes.setSelectedHomeTab,
  payload: payload,
});
