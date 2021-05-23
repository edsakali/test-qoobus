import { SET_USER, LOG_OUT } from "./AuthReducer";
import { AuthActionsTypes, User } from "./AuthReducer";
import { AppDispatch } from "../../redux/store/store";
import {
  ApiServices,
  SignInParams,
  SignUpParams,
} from "../../services/apiServices";

export interface SignInActionParams extends SignInParams {
  notificationError: (error: string) => void;
}

export const signIn = async (params: SignInActionParams) => {
  const promise = new Promise<Pick<User, "firstName" | "lastName" | "email">>(
    (resolve) => {
      setTimeout(() => {
        try {
          const { email, password } = params;
          const result = ApiServices.signIn({ email, password });
          if (result) {
            resolve(result);
          }
        } catch (error) {
          params.notificationError(error.message);
        }
      }, 1000);
    }
  );

  return await promise;
};

export const signInAction =
  (params: SignInActionParams) => async (dispatch: AppDispatch) => {
    const currentUser = await signIn(params);
    const { firstName, lastName, email } = currentUser;
    dispatch(setUser({ firstName, lastName, email }));
  };

export const signUp = async (params: SignUpParams) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      ApiServices.signUp(params);
      resolve();
    }, 1000);
  });
  return await promise;
};
export const signUpAction = (params: SignUpParams) => async (dispatch: AppDispatch) => {
  const { firstName, lastName, email } = params;
  await signUp(params);
  dispatch(setUser({ firstName, lastName, email }));
};

const setUser = (params: User): AuthActionsTypes => {
  return { type: SET_USER, payload: params };
};

export const logout = (): AuthActionsTypes => {
  return {
    type: LOG_OUT,
  };
};
