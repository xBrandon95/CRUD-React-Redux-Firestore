import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { productReducer } from './productReducer';

export const reducers = combineReducers({
  products: productReducer,
  alert: alertReducer,
});
