import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import { fontSize, colors } from "../SystemVariables";
import { MyInput } from "./Input";
// import MyInput from "./Input";

const useStyle = makeStyles({
  form: {
    margin: "auto",
    width: "500px",
    "& div": {
      textAlign: "center"
    }
  },
  title: {
    fontSize: 34,
    opacity: 0.9
  },
  input: {
    width: 500,
    margin: "auto",
    height: 50,
    fontSize: 18,
    marginTop: 16,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&::placeholder": {
      color: "black"
    }
  },
  button: {
    textTransform: "none",
    color: "white",
    fontSize: fontSize.normal,
    background: colors.PrimaryColor,
    marginTop: 16,
    height: 50,
    width: 180,
    marginLeft: 320,
    "&:hover": {
      background: colors.PrimaryDark
    }
  },
  RedButton: {
    textTransform: "none",
    color: colors.darkRed,
    fontSize: 14,
    background: "white",
    border: "solid 1px" + colors.darkRed,
    marginTop: 16,
    width: 180,
    transition: "0.2s",
    "&:hover": {
      background: colors.darkRed,
      color: "white"
    }
  },
  url: {
    fontSize: 14
  },
  multiline: {
    height: "auto"
  }
});
export const Settings: React.FC<{
  url?: string;
  userName?: string;
  bio?: string;
  email?: string;
  handleURLChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUsernameChange?: (e: React.ChangeEvent<{}>) => void;
  handleBioChange?: (e: React.ChangeEvent<{}>) => void;
  handleEmailChange?: (e: React.ChangeEvent<{}>) => void;
  handlePasswordChange?: (e: React.ChangeEvent<{}>) => void;
  handleOnClickUpdate?: () => void;
  handleOnClickLogOut?: () => void;
}> = ({
  url = "",
  userName = "",
  bio = "",
  email = "",
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
          placeholder="UserName"
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
          className={classes.input}
          placeholder="email"
        />
        <MyInput
          onChange={handlePasswordChange}
          className={classes.input}
          placeholder="new Password"
        />
      </div>
      <Button onClick={handleOnClickUpdate} className={classes.button}>
        Update Setting
      </Button>
      <Button onClick={handleOnClickLogOut} className={classes.RedButton}>
        Or click here to logout.
      </Button>
    </form>
  );
};
