import React from "react";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { MyTab } from "./components/Tab";

import Grid from "@material-ui/core/Grid";

import "./App.css";
class App extends React.Component<React.FC<{}>> {
  getGlobalFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  getYourFeed = (): JSX.Element => {
    return <p>still not calculated</p>;
  };
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <NavBar />
          <Header />
        </Grid>
        <Grid item xs={9}>
          <MyTab globalFeed={this.getYourFeed()} YouFeed={this.getYourFeed()} />
        </Grid>
      </Grid>
    );
  }
}
export default App;
