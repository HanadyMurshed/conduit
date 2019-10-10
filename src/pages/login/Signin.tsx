import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { SignIn } from "../../components/sign-in-up/SignIn";
import { login } from "../../api/server";
import { IUser } from "../../types/conduit.types";
import { IState } from "./IState";
import { IProps } from "./IProps";
import { styles } from "./styles";
import { Redirect } from "react-router";

class SignInPage extends React.Component<IProps, IState> {
  state: IState = {
    toHome: false,
    errors: [],
    email: "",
    password: "",
    popperContent: "",
    popperOpen: false,
    toSignInUp: false
  };
  componentDidMount() {
    this.setState({ toHome: Boolean(sessionStorage.getItem("token")) });
  }

  handleEmailFocus = () => {
    this.setState({
      popperOpen: false
    });
  };
  handleLogin = () => {
    const { email, password } = this.state;
    const { startSession } = this.props;
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
      login({ email: email, password: password })
        .then((response: any) => {
          //start session
          const user: IUser = response.data.user;
          this.setState({ toHome: true });
          startSession(user.token, user.username);
        })
        .catch(() => {
          this.setState({ errors: ["email or password is invalid"] });
        });
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
    const { classes } = this.props;
    const {
      errors,
      email,
      password,
      popperContent,
      popperOpen,
      toHome,
      toSignInUp
    } = this.state;
    if (toHome) return <Redirect to="/" />;
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
export default withStyles(styles)(SignInPage);
