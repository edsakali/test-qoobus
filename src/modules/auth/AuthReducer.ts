const SET_USER = "SET_USER"
const LOG_OUT = "LOG_OUT"

type AuthActionsTypes = {
    type: typeof SET_USER | typeof LOG_OUT;
    payload: User
}

export interface User {
    lastName: string;
    firstName: string;
    email: string;
}

interface AuthState {
user: User | null;
}

const initialState: AuthState = {
    user: null
}

export const authReducer = (state=initialState, action:AuthActionsTypes): AuthState => {
    switch(action.type){
    case SET_USER:
        return {...state, user: action.payload};
    case LOG_OUT: 
    return {...state, user: null}

    default:
            return state;
   }
}