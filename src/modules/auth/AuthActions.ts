import {SET_USER, LOG_OUT} from './AuthReducer'
import {AuthActionsTypes, User} from './AuthReducer'
import {AppDispatch} from '../../redux/store/store'
import {ApiServices} from '../../services/apiServices'




export const signIn = async (params: Pick<User, 'email' | 'password'>) => {
  const promise = new Promise<Pick<User, 'firstName' | 'lastName' | 'email'>>((resolve) => {
      setTimeout(() => {
          const result= ApiServices.signIn(params);
          resolve(result);
      }, 1000);
  });
  
  return await promise;
}
export const signInAction = (params: User) => async (dispatch: AppDispatch) => {
 const currentUser = await signIn(params);
const {firstName, lastName, email} = currentUser
  dispatch(setUser({firstName, lastName, email}));
}


export const signUp = async (params: User) => {
  const promise = new Promise<void>((resolve) => {
      setTimeout(() => {
          ApiServices.signUp(params);
          resolve();
      }, 1000);
  });
  return await promise;
}
export const signUpAction = (params: User) => async (dispatch: AppDispatch) => {
  const {firstName, lastName, email} = params
  await signUp(params);
  dispatch(setUser({firstName, lastName, email}));
}

const setUser = (params: User):AuthActionsTypes => {
    return {type: SET_USER, payload: params};
  };

export const logout = ():AuthActionsTypes  => {
    return {
      type: LOG_OUT,
    };
  };
