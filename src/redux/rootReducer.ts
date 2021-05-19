import { combineReducers } from 'redux';
import {authReducer} from '../modules/auth/AuthReducer'



 export const rootReducer = combineReducers({
    auth: authReducer,
  });