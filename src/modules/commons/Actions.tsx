import {ActionTypes} from './ActionTypes';

export const setErrorConfig = (payload: boolean) => ({
  type: ActionTypes.setErrorConfig,
  payload: payload,
});

export const setLoading = (payload: boolean) => ({
  type: ActionTypes.setLoading,
  payload: payload,
});

export const setRefresh = (payload: boolean) => ({
  type: ActionTypes.setRefresh,
  payload: payload,
});

export const setAlert = (alert: boolean, alertMessage: string) => ({
  type: ActionTypes.setAlert,
  alert,
  alertMessage,
});

export const setColorScheme = (payload: string) => ({
  type: ActionTypes.setColorScheme,
  payload: payload,
});

export const setBottomSheetConfig = (payload: any) => ({
  type: ActionTypes.setBottomSheetConfig,
  payload: payload,
});

export const setBottomSheetAlertConfig = (payload: any) => ({
  type: ActionTypes.setBottomSheetAlertConfig,
  payload: payload,
});

export const setKeyboardVisible = (payload: any) => ({
  type: ActionTypes.setKeyboardVisible,
  payload: payload,
});
