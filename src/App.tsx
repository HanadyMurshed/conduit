import React from "react";
import Grid from "@material-ui/core/Grid";
import { NavBar } from "./components/NavBar";
import { ButtonNavBar } from "./components/ButtonNavBar";
import { withStyles } from "@material-ui/styles";
import Home from "./pages/home/Home";
import SignUpPage from "./pages/signup/SignUp";
import SignInPage from "./pages/login/Signin";
import NewPostPage from "./pages/newArticle/NewArticle";
import SettingsPage from "./pages/settings/Settings";
import ArticlePage from "./pages/article/Article";
import UserPage from "./pages/Profile/Profile";
import SettingsIcon from "@material-ui/icons/Settings";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { getCurrentUser } from "./api/server";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/ProtectedRoute";
const style = {
  router: { width: "100%" }
};
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Merriweather Sans", "Titillium Web"].join(",")
  }
});
class App extends React.Component<{ classes: any }> {
  state: {
    token: string | null;
    username: string | null;
    image: string | null;
  } = {
    token: null,
    username: null,
    image: null
  };

  componentDidMount() {
    const jsonData = sessionStorage.getItem("data");
    if (jsonData) {
      const data = JSON.parse(jsonData);
      this.setState({
        token: data.token,
        username: data.username
      });
    }
  }

  updateUser = () => {
    getCurrentUser()
      .then((res: any) => {
        const { token, username, image } = res.data.user;
        this.setState({
          token: token,
          username: username,
          image: image
        });
      })
      .catch((err: any) => {});
  };

  startSession = (token: string, username: string) => {
    sessionStorage.setItem(
      "data",
      JSON.stringify({ token: token, username: username })
    );

    this.setState({
      token: token,
      username: username
    });
  };
  endSession = () => {
    sessionStorage.clear();
    this.setState(
      {
        username: null,
        token: null
      }
      // () => navigate("/")
    );
  };

  getNavBarButtons() {
    if (this.state.token)
      return (
        <div>
          <ButtonNavBar to="/" title="Home" />
          <ButtonNavBar
            to="/new-post"
            title="New Article"
            icon={<OpenInNewIcon style={{ fontSize: 15, paddingRight: 4 }} />}
          />
          <ButtonNavBar
            to="/settings"
            title="Settings"
            icon={<SettingsIcon style={{ fontSize: 15, paddingRight: 4 }} />}
          />
          <ButtonNavBar
            to={`/user/${this.state.username}`}
            title={this.state.username ? this.state.username : "My Profile"}
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
    const { username } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <NavBar>{this.getNavBarButtons()}</NavBar>
            </Grid>
            <div className={classes.router}>
              <Switch>
                <Route
                  path="/user/:username"
                  render={(props: any) => (
                    <UserPage {...props} loggedUser={username} />
                  )}
                />
                <PrivateRoute
                  to="/"
                  authentocationRequired={false}
                  path="/sign-up"
                >
                  <SignUpPage startSession={this.startSession} />
                </PrivateRoute>
                <PrivateRoute
                  to="/"
                  authentocationRequired={false}
                  path="/sign-in"
                >
                  <SignInPage
                    startSession={this.startSession}
                    path="/sign-in"
                  />
                </PrivateRoute>
                <Route path="/Article/:slug" component={ArticlePage} />
                <PrivateRoute
                  to="/"
                  authentocationRequired={true}
                  path="/new-post"
                >
                  <NewPostPage />
                </PrivateRoute>
                <PrivateRoute
                  to="/"
                  authentocationRequired={true}
                  path="/settings"
                >
                  <SettingsPage
                    endSession={this.endSession}
                    handleUpdate={this.updateUser}
                  />
                </PrivateRoute>
                <Route path="/">
                  <Home isLogged={Boolean(this.state.token)} />
                </Route>
              </Switch>
              {/* <NotFound default /> */}
            </div>
          </Grid>{" "}
        </ThemeProvider>
      </Router>
    );
  }
}

export default withStyles(style)(App);
