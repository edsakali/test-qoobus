import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const { push } = useHistory();
  //   const { user } = useSelector(authSelector);

  //   if (!user) {
  //     push("/login");
  //   }

  return <Route {...rest}>{children}</Route>;
};
