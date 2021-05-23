import {SET_USER, LOG_OUT} from './AuthReducer'
import {AuthActionsTypes, User} from './AuthReducer'
import {AppDispatch} from '../../redux/store/store'
import {ApiServices} from '../../services/apiServices'

interface SignInParams extends Partial<Pick<User,'email' |'password'>> {
notificationError: (error: string)=> void;
}

export const signIn = async (params: SignInParams) => {
  const promise = new Promise<Pick<User, 'firstName' | 'lastName' | 'email'>>((resolve) => {
      setTimeout(() => {
        try {
          const{email,password} = params
          const result = ApiServices.signIn({email, password});
          if (result) {
            resolve(result);
          }
        } catch (error) {
          params.notificationError(error.message)
        }
      }, 1000);
  });
  
  return await promise;
}
export const signInAction = (params: SignInParams) => async (dispatch: AppDispatch) => {
    const currentUser = await signIn(params);
    const {firstName, lastName, email} = currentUser;
      dispatch(setUser({firstName, lastName, email}))
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
