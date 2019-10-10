import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import GlobalHome from "./GlobalHome";
import MyHome from "./MyHome";

export default class Home extends React.Component<
  RouteComponentProps & { isLogged: boolean }
> {
  render() {
    console.log(this.props.isLogged);
    if (this.props.isLogged) return <MyHome />;
    return <GlobalHome />;
  }
}
