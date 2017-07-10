import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { createProductAPIReducer }  from './../product/api/reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const RootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    products: createProductAPIReducer(),
    router: routerReducer,
  }));
