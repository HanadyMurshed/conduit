import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { SignIn } from "../../components/sign-in-up/SignIn";
import { IState } from "./IState";
import { IProps } from "./IProps";
import { styles } from "./styles";
import { Redirect } from "react-router";
import { loginAction } from "../../actions/login";
import { connect } from "react-redux";
import { AppState } from "../../reducers/rootReducer";

class SignInPage extends React.Component<IProps, IState> {
  state: IState = {
    errors: [],
    email: "",
    password: "",
    popperContent: "",
    popperOpen: false,
    toSignInUp: false
  };

  handleEmailFocus = () => {
    this.setState({
      popperOpen: false
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    if (email.charAt(0) === "@")
      this.setState({
        popperOpen: true,
        popperContent: `Please enterva part followed by '@'. ${email} is incomplete`
      });
    else if (email.charAt(email.length - 1) === "@")
      this.setState({
        popperOpen: true,
        popperContent: `Please enterva part following '@'. ${email} is incomplete`
      });
    else if (!email.includes("@"))
      this.setState({
        popperOpen: true,
        popperContent: `Please include an '@' in the email address. ${email} is missing an '@' `
      });
    else {
      this.props.loginAction({ email: email, password: password });
    }
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };
  handleHaveAccount = () => {
    this.setState({
      toSignInUp: true
    });
  };
  render() {
    const { classes, loggedIn } = this.props;
    const {
      errors,
      email,
      password,
      popperContent,
      popperOpen,
      toSignInUp
    } = this.state;
    if (loggedIn) return <Redirect to="/" />;
    if (toSignInUp) return <Redirect to="/sign-up" />;
    return (
      <Grid container className={classes.page}>
        <SignIn
          errors={errors}
          email={email}
          password={password}
          popperContent={popperContent}
          popperOpen={popperOpen}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleFocusInput={this.handleEmailFocus}
          onClick={this.handleLogin}
          handleNoAccount={this.handleHaveAccount}
        />
      </Grid>
    );
  }
}
const mapState = (state: AppState) => {
  return { loggedIn: state.system.loggedIn };
};

export default withStyles(styles)(
  connect(
    mapState,
    { loginAction }
  )(SignInPage)
);
