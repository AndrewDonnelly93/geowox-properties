import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import propertiesReducer from './properties/properties.reducer'

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  properties: propertiesReducer
});

export default persistReducer(persistConfig, rootReducer);