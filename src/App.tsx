import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from "./container/NavBar";
import { PrivateRoute } from "./container/ProtectedRoute";
import Home from "./pages/home/Home";
import SignUpPage from "./pages/signup/SignUp";
import SignInPage from "./pages/login/Signin";
import NewPostPage from "./pages/newArticle/NewArticle";
import SettingsPage from "./pages/settings/Settings";
import ArticlePage from "./pages/article/Article";
import UserPage from "./pages/Profile/Profile";
import { getCurrentUser } from "./api/server";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setUserInfo } from "./actions/setUserInfo";
import { connect } from "react-redux";
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

class App extends React.Component<{
  classes: any;
  setUserInfo: any;
  user: any;
}> {
  componentDidMount() {
    const jsonData = sessionStorage.getItem("data");
    if (jsonData) {
      const user = JSON.parse(jsonData);
      this.props.setUserInfo(user);
    }
  }

  updateUser = () => {
    getCurrentUser()
      .then((res: any) => {
        const { token, username, image, email, bio } = res.data.user;
        this.props.setUserInfo(res.data.user);
      })
      .catch((err: any) => {});
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <NavBar />
            </Grid>
            <div className={classes.router}>
              <Switch>
                <Route
                  path="/user/:username"
                  render={(props: any) => <UserPage {...props} />}
                />
                <PrivateRoute
                  to="/"
                  authentocationRequired={false}
                  path="/sign-up"
                  component={<SignUpPage />}
                />
                <PrivateRoute
                  to="/"
                  authentocationRequired={false}
                  path="/sign-in"
                  component={<SignInPage path="/sign-in" />}
                />
                {/* <Route path="/Article/:slug">
                  <ArticlePage />
                </Route> */}
                <PrivateRoute
                  to="/"
                  authentocationRequired={true}
                  path="/new-post"
                  component={<NewPostPage />}
                />
                <PrivateRoute
                  to="/"
                  authentocationRequired={true}
                  path="/settings"
                  component={<SettingsPage handleUpdate={this.updateUser} />}
                />
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              {/* <NotFound default /> */}
            </div>
          </Grid>
        </ThemeProvider>
      </Router>
    );
  }
}

const mapState = (state: any) => ({ user: state.user });
const mapDisptach = { setUserInfo };

export default withStyles(style)(
  connect(
    mapState,
    mapDisptach
  )(App)
);
