import {Screens} from '../../utils/Constants';
import {removeUserSession} from '../../utils/LocalStorage';
import {resetNavigationStack} from '../../utils/Utils';
import {ActionTypes} from './ActionTypes';

const initialState = {
  session: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setLogout: {
      resetNavigationStack(action.payload, Screens.PHONE_NUMBER);
      removeUserSession();
      return {...{session: null}};
    }
    case ActionTypes.setSession:
      return {...state, ...{session: action.payload}};
  }
  return state;
};
