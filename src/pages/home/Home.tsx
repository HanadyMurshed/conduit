import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import GlobalHome from "./GlobalHome";
import MyHome from "./MyHome";
import { connect } from "react-redux";
import { AppState } from "../../reducers/rootReducer";

class Home extends React.Component<
  RouteComponentProps & { loggedIn: boolean }
> {
  render() {
    if (this.props.loggedIn) return <MyHome />;
    return <GlobalHome />;
  }
}

const mapState = (state: AppState) => ({
  loggedIn: state.system.loggedIn
});

export default connect(mapState)(Home);
