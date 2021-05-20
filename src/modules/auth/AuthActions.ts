import {SET_USER, LOG_OUT} from './AuthReducer'
import {AuthActionsTypes, User} from './AuthReducer'
import {AppDispatch} from '../../redux/store/store'
import {ApiServices} from '../../services/apiServices'



export const signInAction = (params: User) => (dispatch: AppDispatch)=> {
    const currentUser = ApiServices.signIn(params)
    const {firstName, lastName, email} = currentUser
    
    if(currentUser){
        return dispatch(setUser({firstName, lastName, email}))
    }
}

export const signUpAction = (params: User) => (dispatch: AppDispatch) => {
  const {firstName, lastName, email} = params
    ApiServices.signUp(params)
        dispatch(setUser({firstName, lastName, email}))
}

const setUser = (params: User):AuthActionsTypes => {
    return {type: SET_USER, payload: params};
  };

export const logout = ():AuthActionsTypes  => {
    return {
      type: LOG_OUT,
    };
  };
