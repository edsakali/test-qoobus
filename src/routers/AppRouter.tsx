import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { SignInPage } from "../modules/auth/login/signin-page/SignInPage";
import { SignUpPage } from "../modules/auth/signup/signup-page/SignUpPage";

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
        <Redirect from={"*"} to={"/"} />
      </Switch>
    </Router>
  );
};
