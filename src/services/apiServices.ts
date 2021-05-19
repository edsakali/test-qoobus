// import {User} from '../redux/reducers/authReducer'
export interface User {
    lastName: string;
    firstName: string;
    email: string;
}

export class ApiServices {

    
    static signIn: (params: User) => {
        //getState
      }

    static signUp: (params: User) => {
        //setState
      }

}