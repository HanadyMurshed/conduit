import React from "react";
import { Router, navigate } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import { NavBar } from "./components/NavBar";
import { ButtonNavBar } from "./components/ButtonNavBar";
import { withStyles } from "@material-ui/styles";
import Home from "./pages/home/Home";
import UserHome from "./pages/home/UserHome";
import SignUpPage from "./pages/signup/SignUp";
import SignInPage from "./pages/login/Signin";
import NewPostPage from "./pages/newPost/NewPost";
import SettingsPage from "./pages/settings/Settings";
import ArticlePage from "./pages/article/Article";
import UserPage from "./pages/Profile/Profile";
import SettingsIcon from "@material-ui/icons/Settings";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const style = {
  router: { width: "100%" }
};
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Merriweather Sans", "Titillium Web"].join(",")
  }
});
interface IState {
  token?: string;
}
class App extends React.Component<{ classes: any }> {
  state: { token: string | null; username: string | null } = {
    token: null,
    username: null
  };

  componentDidMount() {
    this.setState({
      token: sessionStorage.getItem("token")
    });
  }
  startSession = (token: string, username: string) => {
    sessionStorage.setItem("token", token);
    this.setState({
      token: token,
      username: username
    });
  };
  endSession = () => {
    sessionStorage.clear();
    this.setState(
      {
        token: null,
        username: null
      },
      () => navigate("/")
    );
  };

  getNavBarButtons() {
    if (this.state.token)
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
          <ButtonNavBar
            to="/"
            title={this.state.username ? this.state.username : "Profile"}
          />
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
    const { token } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <NavBar>{this.getNavBarButtons()}</NavBar>
          </Grid>
          <Router className={classes.router}>
            {token ? <UserHome path="/" /> : <Home path="/" />}
            <SignUpPage path="/sign-up" />
            <SignInPage startSession={this.startSession} path="/sign-in" />
            <NewPostPage path="/new-post" />
            <SettingsPage endSession={this.endSession} path="/settings" />
            <ArticlePage path="/Article/:slug" />
            <UserPage path="/:username" />
          </Router>
        </Grid>{" "}
      </ThemeProvider>
    );
  }
}

export default withStyles(style)(App);
