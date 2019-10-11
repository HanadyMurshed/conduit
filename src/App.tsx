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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/ProtectedRoute";
import { IUser } from "./types/conduit.types";
import { Avatar } from "@material-ui/core";
const style = {
  router: { width: "100%" },
  link: {
    textDecoration: "none"
  }
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
    bio: string | null;
    email: string | null;
  } = {
    token: null,
    username: null,
    image: null,
    bio: null,
    email: null
  };

  componentDidMount() {
    const jsonData = sessionStorage.getItem("data");
    if (jsonData) {
      const user = JSON.parse(jsonData);
      this.setState({
        token: user.token,
        username: user.username,
        image: user.image,
        email: user.email,
        bio: user.bio
      });
    }
  }

  updateUser = () => {
    getCurrentUser()
      .then((res: any) => {
        const { token, username, image, email, bio } = res.data.user;
        this.setState({
          token: token,
          username: username,
          image: image,
          email: email,
          bio: bio
        });
      })
      .catch((err: any) => {});
  };

  startSession = (user: IUser) => {
    sessionStorage.setItem("data", JSON.stringify(user));

    this.setState({
      token: user.token,
      username: user.username,
      image: user.image,
      email: user.email,
      bio: user.bio
    });
  };
  endSession = () => {
    sessionStorage.clear();
    this.setState(
      {
        username: null,
        token: null,
        image: null
      }
      // () => navigate("/")
    );
  };

  getNavBarButtons(classes: any) {
    if (this.state.token)
      return (
        <div>
          <Link className={classes.link} to="/">
            <ButtonNavBar title="Home" />
          </Link>
          <Link className={classes.link} to="/new-post">
            <ButtonNavBar
              title="New Article"
              icon={<OpenInNewIcon style={{ fontSize: 15, paddingRight: 4 }} />}
            />
          </Link>
          <Link className={classes.link} to="/settings">
            <ButtonNavBar
              title="Settings"
              icon={<SettingsIcon style={{ fontSize: 15, paddingRight: 4 }} />}
            />
          </Link>
          <Link className={classes.link} to={`/user/${this.state.username}`}>
            <ButtonNavBar
              title={this.state.username ? this.state.username : "My Profile"}
            />
          </Link>
        </div>
      );
    else
      return (
        <div>
          <Link className={classes.link} to="/">
            <ButtonNavBar title="Home" />
          </Link>
          <Link className={classes.link} to="sign-up">
            <ButtonNavBar title="Sign Up" />
          </Link>
          <Link className={classes.link} to="sign-in">
            <ButtonNavBar title="Sign In" />
          </Link>
        </div>
      );
  }
  render() {
    const { classes } = this.props;
    const { username, image, bio, email } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <NavBar>{this.getNavBarButtons(classes)}</NavBar>
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
                <Route
                  path="/Article/:slug"
                  render={(props: any) => (
                    <ArticlePage
                      {...props}
                      isLogged={Boolean(this.state.token)}
                    />
                  )}
                ></Route>
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
                    user={{
                      username: username + "",
                      image: image + "",
                      bio: bio + "",
                      email: email + ""
                    }}
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
