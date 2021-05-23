import { User } from "../modules/auth/AuthReducer";
import aes from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignUpParams extends SignInParams {
  firstName: string;
  lastName: string;
}

export type SignInResponse = Omit<SignUpParams, "password">;

const SECRET_CRYPT_KEY = "PASSWORD_TEST_CRYPT";
export class ApiServices {
  static signIn = ({ email, password }: SignInParams): SignInResponse => {
    const users = localStorage.getItem("users");

    if (!users) {
      throw new Error(
        "User with the specified login / password was not found!"
      );
    }

    const userList = JSON.parse(users) as SignUpParams[];

    const currentUser = userList.find((user: User) => user.email === email);
    if (currentUser) {
      const bytes = aes.decrypt(currentUser.password, SECRET_CRYPT_KEY);
      const decryptPassword = bytes.toString(encUtf8);

      if (decryptPassword !== password) {
        throw new Error("User with the specified password was not found!");
      }
    }

    if (!currentUser) {
      throw new Error("User with the specified login was not found!");
    }

    return {
      email: currentUser.email,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
    };
  };

  static signUp = ({ password, ...rest }: SignUpParams) => {
    const cipherPassword = aes.encrypt(password, SECRET_CRYPT_KEY).toString();
    const users = localStorage.getItem("users");
    const newUser = { ...rest, password: cipherPassword };

    if (!users) {
      localStorage.setItem("users", JSON.stringify([newUser]));
      return;
    }

    const userList = JSON.parse(users);
    userList.push(newUser);
    localStorage.setItem("users", JSON.stringify(userList));
  };
}
