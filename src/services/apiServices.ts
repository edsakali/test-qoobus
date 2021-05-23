import {User} from '../modules/auth/AuthReducer'


export class ApiServices {

    
    static signIn = ({email, password}: User)=>{
      const users = localStorage.getItem('users');
      
      if(!users){
        throw new Error('User with the specified login / password was not found!')
      }

      const userList = JSON.parse(users) as User[];

      const currentUser = userList.find((user: User)=> user.email === email);

      if(!currentUser){
        throw new Error('User with the specified login was not found!')
      }
      
      if(currentUser.password !== password){
        throw new Error('User with the specified password was not found!')
      }
      return currentUser;
    }

    static signUp = (params: User)=>{
      const users = localStorage.getItem('users');
       if(!users){
       localStorage.setItem("users", JSON.stringify([params]));
       return;
       }
      const userList = JSON.parse(users);
      userList.push(params)
      localStorage.setItem("users", JSON.stringify(userList));
    }
}