import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRute";
import { SignInPage } from "../modules/auth/login/signin-page/SignInPage";
import { SignUpPage } from "../modules/auth/signup/signup-page/SignUpPage";
import { HomePage } from "../modules/home/home-page/HomePage";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/signIn"}>
          <SignInPage />
        </Route>
        <Route path={"/signUp"}>
          <SignUpPage />
        </Route>
        <PrivateRoute path={"/"}>
          <HomePage />
        </PrivateRoute>
        <Redirect from={"*"} to={"/"} />
      </Switch>
    </Router>
  );
};
