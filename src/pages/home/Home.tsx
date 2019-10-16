import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import GlobalHome from "./GlobalHome";
import MyHome from "./MyHome";
import { connect } from "react-redux";
import { IUser } from "../../types/conduit.types";

class Home extends React.Component<RouteComponentProps & { user: IUser }> {
  render() {
    if (this.props.user) return <MyHome />;
    return <GlobalHome />;
  }
}
const mapState = (state: any) => ({
  user: state.user
});

export default connect(mapState)(Home);
