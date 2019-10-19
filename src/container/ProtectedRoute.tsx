import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../reducers/rootReducer";

export const MyRoute: React.FC<{
  to: string;
  authentocationRequired: boolean;
  path: string;
  loggedIn: boolean;
  component: React.ReactNode;
}> = ({ to, authentocationRequired, path, loggedIn, component, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={() =>
        (authentocationRequired && loggedIn) ||
        (!authentocationRequired && !loggedIn) ? (
          component
        ) : (
          <Redirect to={to} />
        )
      }
    />
  );
};
const mapState = (state: AppState) => ({
  loggedIn: state.system.loggedIn
});

export const PrivateRoute = connect(mapState)(MyRoute);
