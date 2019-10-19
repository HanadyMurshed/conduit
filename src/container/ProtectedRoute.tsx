import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
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
      render={
        () => children
        // (isAuthenticated() && user) || (!isAuthenticated() && !user) ? (
        //   children
        // ) : (
        //   <Redirect to={to} />
        // )
      }
    />
  );
};
// const mapState = (state: any) => ({
//   user: state.user
// });
// export const PrivateRoute = connect(mapState)(MyRoute);
