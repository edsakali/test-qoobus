import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router";
import { AppState } from "../redux/store/store";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { push } = useHistory();
  const { user } = useSelector((state: AppState) => state.auth);

  if (!user) {
    push("/signIn");
  }

  return <Route {...rest}>{children}</Route>;
};
