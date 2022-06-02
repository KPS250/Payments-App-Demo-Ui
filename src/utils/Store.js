import {createStore, applyMiddleware} from 'redux';
import AppReducers from './RootReducer';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

let Store = createStore(AppReducers, applyMiddleware(thunk));
export default Store;
export const Persistor = persistStore(Store);
