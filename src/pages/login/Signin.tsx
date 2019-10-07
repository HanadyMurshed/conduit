import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps, navigate } from "@reach/router";
import { SignIn } from "../../components/sign-in-up/SignIn";
import { login } from "../../api/server";
import { IUser } from "../../types/conduit.types";
import { IState } from "./IState";

const styles = {
  page: {
    margin: "auto",
    minWidth: 500,
    marginTop: 20
  }
};
class SignInPage extends React.Component<
  {
    classes: any;
    startSession: (tokenL: string, username: string) => void;
  } & RouteComponentProps,
  IState
> {
  state: IState = {
    errors: [],
    email: "",
    password: "",
    popperContent: "",
    popperOpen: false
  };

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
          const { token, username }: IUser = response.data.user;
          navigate("/");
          startSession(token, username);
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
    navigate("/sign-up");
  };
  render() {
    const { classes } = this.props;
    const { errors, email, password, popperContent, popperOpen } = this.state;
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
