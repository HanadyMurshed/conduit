import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { SignUp } from "../../components/sign-in-up/SignUp";
import { IState } from "./IState";
import { register } from "../../api/server";
import { IUser } from "../../types/conduit.types";
import { Redirect } from "react-router";

const styles = {
  page: {
    margin: "auto",
    minWidth: 500,
    marginTop: 20
  }
};
class SignUpPage extends React.Component<
  {
    classes: any;
    startSession: (tokenL: string, username: string) => void;
  },
  IState
> {
  state: IState = {
    toSignInUp: false,
    toHome: false,
    errors: [],
    email: "",
    username: "",
    password: "",
    popperContent: "",
    popperOpen: false
  };

  handleEmailFocus = () => {
    this.setState({
      popperOpen: false
    });
  };
  handleRegester = () => {
    const { email, username, password } = this.state;
    const { startSession } = this.props;
    let error = [];
    if (email === "") error.push("email can't be blank");
    else if (email.charAt(0) === "@") {
      this.setState({
        popperOpen: true,
        popperContent: `Please enterva part followed by '@'. ${email} is incomplete`
      });
      return;
    } else if (email.charAt(email.length - 1) === "@") {
      this.setState({
        popperOpen: true,
        popperContent: `Please enterva part following '@'. ${email} is incomplete`
      });
      return;
    } else if (!email.includes("@")) {
      this.setState({
        popperOpen: true,
        popperContent: `Please include an '@' in the email address. ${email} is missing an '@' `
      });
      return;
    } else if (!validateEmail(email)) {
      error.push("email is invalid");
    }
    if (username === "")
      error.push("username can't be blankis too short (minimum is 1 character");
    else if (username.length > 22)
      error.push("username is too long (maximum is 20 characters");
    if (password === "") error.push("password can't be blank");
    else if (password.length < 8)
      error.push("password is too short (minimum is 8 characters");

    if (error.length !== 0) {
      this.setState({ errors: error });
    } else {
      console.log(username, email, password);
      register({ username: username, email: email, password: password })
        .then((response: any) => {
          //start session
          console.log(response);
          const { token, username }: IUser = response.data.user;
          this.setState({ toHome: true }, () => startSession(token, username));
        })
        .catch((er: any) => {
          console.log(er);

          this.setState({
            errors: ["email, username or password is invalid"]
          });
        });
    }
  };

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };
  handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  };
  handleHaveAccount = () => {
    this.setState({ toSignInUp: true });
  };
  render() {
    const { classes } = this.props;
    const {
      toHome,
      email,
      password,
      username,
      popperOpen,
      popperContent,
      errors,
      toSignInUp
    } = this.state;
    if (toHome) return <Redirect to="/" />;
    if (toSignInUp) return <Redirect to="/sign-in" />;
    return (
      <Grid container className={classes.page}>
        <SignUp
          errors={errors}
          email={email}
          username={username}
          password={password}
          popperOpen={popperOpen}
          popperContent={popperContent}
          handleEmailChange={this.handleEmailChange}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleFocusInput={this.handleEmailFocus}
          onClick={this.handleRegester}
          handleNoAccount={this.handleHaveAccount}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(SignUpPage);
function validateEmail(email: string) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
