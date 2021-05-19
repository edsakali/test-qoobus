import {LOG_OUT} from './AuthReducer'
import {AuthActionsTypes} from './AuthReducer'

export const logout = ():AuthActionsTypes  => {
    return {
      type: LOG_OUT,
    };
  };