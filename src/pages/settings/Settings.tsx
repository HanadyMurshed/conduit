import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { Settings } from "../../components/settings/Settings";
import { IState } from "./IState";
import { styles } from "./styles";

class SettingsPage extends React.Component<
  { classes: any } & RouteComponentProps,
  IState
> {
  state: IState = {
    username: "",
    bio: "",
    url: "",
    email: "",
    password: ""
  };

  handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      url: event.target.value
    });
  };
  handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value
    });
  };
  handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      bio: event.target.value
    });
  };
  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: event.target.value
    });
  };
  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.target.value
    });
  };
  handleOnClickUpdate = () => {};
  render() {
    const { classes } = this.props;
    const { username, bio, email, url, password } = this.state;
    return (
      <Grid container className={classes.page}>
        <Settings
          handleBioChange={this.handleBioChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleURLChange={this.handleURLChange}
          handleUsernameChange={this.handleUsernameChange}
          userName={username}
          email={email}
          bio={bio}
          url={url}
          password={password}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(SettingsPage);
