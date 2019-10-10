import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../utils/Helpers";

export const PrivateRoute: React.FC<{
  to: string;
  authentocationRequired: boolean;
  path: string;
}> = ({ to, authentocationRequired, path, children, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() =>
        (isAuthenticated() && authentocationRequired) ||
        (!isAuthenticated() && !authentocationRequired) ? (
          children
        ) : (
          <Redirect to={to} />
        )
      }
    />
  );
};
