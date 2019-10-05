import React from "react";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import { NavBar } from "./components/NavBar";
import { ButtonNavBar } from "./components/ButtonNavBar";
import { withStyles } from "@material-ui/styles";
import Home from "./pages/home/PageHome";
import SignUpPage from "./pages/signup/PageSignUp";
import SignInPage from "./pages/login/PageSignIn";
import NewPostPage from "./pages/newPost/PageNewPost";
import SettingsPage from "./pages/settings/PageSettings";
import ArticlePage from "./pages/article/PageArticle";
import SettingsIcon from "@material-ui/icons/Settings";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const logged = false;
const style = {
  router: { width: "100%" }
};
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Merriweather Sans", "Titillium Web"].join(",")
  }
});
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
            to="/settings"
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
      <ThemeProvider theme={theme}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <NavBar>{this.getNavBarButtons()}</NavBar>
          </Grid>
          <Router className={classes.router}>
            <Home path="/" />
            <SignUpPage path="/sign-up" />
            <SignInPage path="/sign-in" />
            <NewPostPage path="/new-post" />
            <SettingsPage path="/settings" />
            <ArticlePage path="/Article/:slug" />
          </Router>
        </Grid>{" "}
      </ThemeProvider>
    );
  }
}

export default withStyles(style)(App);
