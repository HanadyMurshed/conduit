import * as React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { Settings } from "../../components/settings/Settings";
import { IState } from "./IState";
import { styles } from "./styles";
import { getCurrentUser, updateUser } from "../../api/server";
import { IProps } from "./IProps";
import { navigate, RouteComponentProps } from "@reach/router";

class SettingsPage extends React.Component<
  IProps & RouteComponentProps,
  IState
> {
  state: IState = {
    username: "",
    bio: "",
    url: "",
    email: "",
    password: "",
    popperOpen: false,
    popperContent: ""
  };

  componentWillMount() {
    getCurrentUser().then((response: any) => {
      const { username, email, bio, image } = response.data.user;
      this.setState({
        username: username,
        bio: bio,
        email: email,
        url: image
      });
    });
  }
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
  handleOnClickUpdate = () => {
    const { username, email, bio, url } = this.state;
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
      updateUser({
        username: username,
        email: email,
        bio: bio,
        image: url
      })
        .then((res: any) => {
          this.props.handleUpdate();
          navigate("/");
        })
        .catch((er: any) => {});
    }
  };
  render() {
    const { classes, endSession } = this.props;
    const { username, bio, email, url, password } = this.state;
    return (
      <Grid container className={classes.page}>
        <Settings
          handleBioChange={this.handleBioChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleURLChange={this.handleURLChange}
          handleUsernameChange={this.handleUsernameChange}
          handleOnClickUpdate={this.handleOnClickUpdate}
          handleOnClickLogOut={endSession}
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
