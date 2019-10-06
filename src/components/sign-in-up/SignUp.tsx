import * as React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { MyInput } from "../Input";
import { style } from "./style";
import { SignUpIProps } from "./IProps";
import { PopperMsg } from "../PoppupMsg";
import { ErrorList } from "../errors";

const useStyle = makeStyles(style);

export const SignUp: React.FC<SignUpIProps> = ({
  errors = [],
  email = "",
  password = "",
  username = "",
  popperContent = "",
  popperOpen = false,
  onClick = () => {},
  handleFocusInput = () => {},
  handleEmailChange = () => {},
  handlePasswordChange = () => {},
  handleUsernameChange = () => {},
  handleNoAccount = () => {}
}) => {
  const classes = useStyle();
  return (
    <div className={classes.form}>
      <div>
        <Typography className={classes.title}>Sign Up</Typography>
        <Typography onClick={handleNoAccount} className={classes.a}>
          Have an account?
        </Typography>
        {errors && errors !== [] ? <ErrorList errors={errors} /> : null}
        <MyInput
          className={classes.input}
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <MyInput
          className={classes.input}
          placeholder="Email"
          onfocus={handleFocusInput}
          value={email}
          id="email"
          onChange={handleEmailChange}
        />
        <PopperMsg open={popperOpen} id="email" content={popperContent} />

        <MyInput
          className={classes.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Button className={classes.button} onClick={onClick}>
        Sign in
      </Button>
    </div>
  );
};
