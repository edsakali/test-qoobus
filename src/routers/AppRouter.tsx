import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { SignUpPage } from "../modules/auth/signup/signup-page/SignUpPage";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          <SignUpPage />
        </Route>
        <Redirect from={"*"} to={"/"} />
      </Switch>
    </Router>
  );
};
