import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { SignIn } from "../../components/SignUpIn";
import { ReferenceObject } from "popper.js";

const styles = {
  page: {
    margin: "auto",
    minWidth: 500,
    marginTop: 20
  }
};
interface IState {
  email: string;
  emailAnchor?: ReferenceObject | null;
  password: string;
  passwordAnchor?: string;
  popperAchorE?: ReferenceObject | null;
  popperOpen?: boolean;
  popperContent?: string;
}
class SignInPage extends React.Component<
  { classes: any } & RouteComponentProps,
  IState
> {
  state: IState = {
    email: "",
    password: "",
    popperContent: "",
    popperAchorE: null,
    popperOpen: false
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
        popperAchorE: document.getElementById("emailInput"),
        popperOpen: true,
        popperContent: `Please enterva part followed by '@'. ${email} is incomplete`
      });
    else if (email.charAt(email.length - 1) == "@")
      this.setState({
        popperAchorE: document.getElementById("emailInput"),
        popperOpen: true,
        popperContent: `Please enterva part following '@'. ${email} is incomplete`
      });
    else if (!email.includes("@"))
      this.setState({
        popperAchorE: document.getElementById("emailInput"),
        popperOpen: true,
        popperContent: `Please include an '@' in the email address. ${email} is missing an '@' `
      });
  };
  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const {
      email,
      password,
      popperContent,
      popperAchorE,
      popperOpen
    } = this.state;
    return (
      <Grid container className={classes.page}>
        <SignIn
          email={email}
          password={password}
          popperContent={popperContent}
          popperAchorE={popperAchorE}
          popperOpen={popperOpen}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleFocusInput={this.handleEmailFocus}
          onClick={this.handleLogin}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(SignInPage);
