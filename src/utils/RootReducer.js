import {combineReducers} from 'redux';
import {commonReducer} from '../modules/commons/Reducer';
import {ActionTypes} from '../modules/login/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import { homeReducer } from '../modules/home/Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const AppReducers = combineReducers({
  commonReducer: persistReducer(persistConfig, commonReducer),
  homeReducer: persistReducer(persistConfig, homeReducer),
});

const RootReducer = (state, action) => {
  console.log('action of Redux in Root Reducer', action.type);
  if (action.type === ActionTypes.setLogout) {
    console.log('state of Redux in Root Reducer', state);
    return AppReducers(undefined, action);
  } else {
    return AppReducers(state, action);
  }
};

export default AppReducers;
