import * as React from "react";
import { Typography, Button } from "@material-ui/core";
import { MyInput } from "../Input";
import { IProps } from "./IProps";
import { style } from "./style";
import { makeStyles } from "@material-ui/styles";
import { PopperMsg } from "../PoppupMsg";

const useStyle = makeStyles(style);

export const Settings: React.FC<IProps> = ({
  url = "",
  userName = "",
  bio = "",
  email = "",
  password = "",
  popperOpen = false,
  popperContent = "",
  handleURLChange = () => {},
  handleUsernameChange = () => {},
  handleBioChange = () => {},
  handleEmailChange = () => {},
  handlePasswordChange = () => {},
  handleOnClickUpdate = () => {},
  handleOnClickLogOut = () => {}
}) => {
  const classes = useStyle();
  return (
    <form className={classes.form}>
      <div>
        <Typography className={classes.title}>Your Settings</Typography>
        <MyInput
          value={url}
          onChange={handleURLChange}
          className={`${classes.input} ${classes.url}`}
          placeholder="URL of profile picture"
        />
        <MyInput
          onChange={handleUsernameChange}
          value={userName}
          className={classes.input}
          placeholder="Username"
        />
        <MyInput
          multiline
          rows="8"
          onChange={handleBioChange}
          value={bio}
          className={`${classes.input} ${classes.multiline}`}
          placeholder="Short bio about you"
        />
        <MyInput
          onChange={handleEmailChange}
          value={email}
          id="email"
          className={classes.input}
          placeholder="Email"
        />
        <PopperMsg open={popperOpen} id="Email" content={popperContent} />

        <MyInput
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={classes.input}
          placeholder="New Password"
        />
      </div>
      <Button onClick={handleOnClickUpdate} className={classes.button}>
        Update Profile
      </Button>
      <Button onClick={handleOnClickLogOut} className={classes.RedButton}>
        Or click here to logout.
      </Button>
    </form>
  );
};
