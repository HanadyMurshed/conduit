import React from "react";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import { NavBar } from "./components/NavBar";
import { ButtonNavBar } from "./components/ButtonNavBar";
import { withStyles } from "@material-ui/styles";
import Home from "./PageHome";
import SignUpPage from "./PageSignUp";
import SignInPage from "./PageSignIn";
import NewPostPage from "./PageNewPost";

import SettingsIcon from "@material-ui/icons/Settings";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const logged = true;
const style = {
  router: { width: "100%" }
};

class App extends React.Component<{ classes: any }> {
  getNavBarButtons() {
    if (logged)
      return (
        <div>
          <ButtonNavBar to="/" title="Home" />
          <ButtonNavBar
            to="/new-post"
            title="New Post"
            icon={<OpenInNewIcon style={{ fontSize: 15, paddingRight: 4 }} />}
          />
          <ButtonNavBar
            to="/"
            title="Settings"
            icon={<SettingsIcon style={{ fontSize: 15, paddingRight: 4 }} />}
          />
          <ButtonNavBar to="/" title="Hanady" />
        </div>
      );
    else
      return (
        <div>
          <ButtonNavBar to="/" title="Home" />
          <ButtonNavBar to="sign-up" title="Sign Up" />
          <ButtonNavBar to="sign-in" title="Sign In" />
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
          <SignUpPage path="/sign-up" />
          <SignInPage path="/sign-in" />
          <NewPostPage path="/new-post" />
        </Router>
      </Grid>
    );
  }
}

export default withStyles(style)(App);
