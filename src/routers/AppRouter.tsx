import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { RegistrationPage } from "../modules/auth/registration/registration-page/RegistrationPage";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"}>
          {" "}
          <RegistrationPage />
        </Route>
        <Redirect from={"*"} to={"/"} />
      </Switch>
    </Router>
  );
};
