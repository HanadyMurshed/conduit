import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../utils/Helpers";
import { IUser } from "../types/conduit.types";

export const PrivateRoute: React.FC<{
  to: string;
  authentocationRequired: boolean;
  path: string;
  user: any;
}> = ({ to, authentocationRequired, path, user, children, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() =>
        (isAuthenticated() && user) || (!isAuthenticated() && !user) ? (
          children
        ) : (
          <Redirect to={to} />
        )
      }
    />
  );
};
const mapState = (state: any) => ({
  user: state.user
});
export default connect(mapState)(PrivateRoute);
