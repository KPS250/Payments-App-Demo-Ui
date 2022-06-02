import {ActionTypes} from './ActionTypes';

const initialState = {
  colorScheme: null,
  errorConfig: {
    visible: false,
    title: null,
    message: null,
    icon: null,
    loader: false,
    buttonLabel: null,
  },
  loading: false,
  refresh: false,
  alert: false,
  alertMessage: null,
  bottomSheetConfig: {
    visible: false,
    label: null,
    message: null,
    buttonLabel: null,
    icon: null,
  },
  bottomSheetAlertConfig: {
    visible: false,
    message: null,
    icon: null,
  },
  keyboardVisible: false,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setColorScheme:
      return {...state, ...{colorScheme: action.payload}};
    case ActionTypes.setErrorConfig:
      return {...state, ...{errorConfig: action.payload}};
    case ActionTypes.setLoading:
      return {...state, ...{loading: action.payload}};
    case ActionTypes.setRefresh:
      return {...state, ...{refresh: action.payload}};
    case ActionTypes.setAlert:
      return {
        ...state,
        ...{alert: action.alert, alertMessage: action.alertMessage},
      };
    case ActionTypes.setBottomSheetConfig:
      return {...state, ...{bottomSheetConfig: action.payload}};
    case ActionTypes.setBottomSheetAlertConfig:
      return {...state, ...{bottomSheetAlertConfig: action.payload}};
    case ActionTypes.setKeyboardVisible:
      return {...state, ...{keyboardVisible: action.payload}};
  }
  return state;
};
