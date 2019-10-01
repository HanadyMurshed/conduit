import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { NavBar } from "./components/NavBar";
import { ButtonNavBar } from "./components/ButtonNavBar";
import { withStyles } from "@material-ui/styles";
import Home from "./Home";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";

const logged = true;
const style = {
  router: { width: "100%" }
};

class App extends React.Component<{ classes: any }> {
  getNavBarButtons() {
    if (logged)
      return (
        <div>
          <ButtonNavBar title="Home" />
          <ButtonNavBar title="Sign Up" />
          <ButtonNavBar title="Sign In" />
        </div>
      );
    else
      return (
        <div>
          )
          <ButtonNavBar title="Home" />
          <ButtonNavBar title="Sign Up" />
          <ButtonNavBar title="Sign In" />
        </div>
      );
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <NavBar>{this.getNavBarButtons()}</NavBar>
        </Grid>
        <Router className={classes.router}>
          <Home path="/" />
          <SignUpPage path="/signup" />
          <SignInPage path="/signin" />
        </Router>
      </Grid>
    );
  }
}

export default withStyles(style)(App);
