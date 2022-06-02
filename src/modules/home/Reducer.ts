import {ActionTypes} from './ActionTypes';

const initialState = {
  selectedHomeTab: 0,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.setSelectedHomeTab:
      return {...state, ...{selectedHomeTab: action.payload}};
  }
  return state;
};
