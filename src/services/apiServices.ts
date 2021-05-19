import {User} from '../modules/auth/AuthReducer'


export class ApiServices {

    
    static signIn = ({email, password}: User)=>{
      const users = localStorage.getItem('users');
      if(!users){
        return;
      }
      const userList = JSON.parse(users);
      const currentUser = userList.find((user: User)=> user.email === email);
      if(currentUser.password !== password){
         return; 
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